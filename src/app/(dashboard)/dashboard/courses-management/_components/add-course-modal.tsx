"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import RichTextEditor from "../../_components/text-editor-formik"
import { getAllCategories } from "@/services/category.service"
import { createCourse, getCourseById, updateCourse } from "@/services/courses.service"
import type { Category } from "@/types/category-types"
import { ModeOfStudy, type Course, type CreateCourseDto, type UpdateCourseDto } from "@/types/course-types"
import { UploadCloud, Loader2 } from "lucide-react"
import Image from "next/image"

interface AddCourseModalProps {
  isOpen: boolean
  onClose: () => void
  courseId?: string | null
  onSaved?: () => void
}

export default function AddCourseModal({ isOpen, onClose, courseId, onSaved }: AddCourseModalProps) {
  const isEditing = !!courseId;
  const [courseTitle, setCourseTitle] = useState("")
  const [description, setDescription] = useState("")
  const [whatYouWillLearn, setWhatYouWillLearn] = useState("")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState<Category[]>([])
  const [modeOfStudy, setModeOfStudy] = useState<ModeOfStudy | "">("")
  const [duration, setDuration] = useState("")
  const [location, setLocation] = useState("")
  const [courseStatus, setCourseStatus] = useState("")
  const [noOfVacancies, setNoOfVacancies] = useState<number>(0)
  const [courseType, setCourseType] = useState<"TRENDING" | "UPCOMING" | "BEST_SELLER" | "">("")
  const [thumbnailFile, setThumbnailFile] = useState<File | undefined>(undefined)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [existingThumbnail, setExistingThumbnail] = useState<string | undefined>(undefined)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    const loadCats = async () => {
      const res = await getAllCategories();
      if (res?.status && Array.isArray(res.data)) setCategories(res.data)
    }
    const loadCourseIfEditing = async () => {
      if (!courseId) return;
      const res = await getCourseById(courseId);
      if (res?.status && res.data) {
        const c = res.data as Course;
        setCourseTitle(c.title || "");
        setDescription(c.description || "");
        setWhatYouWillLearn(c.whatYouWillLearn || "");
        setCategory(typeof c.category === 'string' ? c.category : (c.category?._id || ""));
        setLocation(c.location || "");
        setModeOfStudy(c.modeOfStudy || "");
        setNoOfVacancies(c.noOfVacancies ?? 0);
        setCourseType((c.type as Course["type"]) || "");
        setCourseStatus(c.status ? 'active' : 'not-active');
        setExistingThumbnail(c.thumbnail);
        setDuration(c.duration || "");
      }
    };
    if (isOpen) {
      setErrors({});
      loadCats();
      loadCourseIfEditing();
    } else {
      // reset when closing (for create flow)
      if (!courseId) {
        setCourseTitle("");
        setDescription("");
        setWhatYouWillLearn("");
        setCategory("");
        setLocation("");
        setModeOfStudy("");
        setNoOfVacancies(0);
        setCourseType("");
        setCourseStatus("");
        setThumbnailFile(undefined);
      }
    }
  }, [isOpen, courseId])

  const handleSaveCourse = async () => {
    try {
      const newErrors: Record<string, string> = {}
      if (!courseTitle.trim()) newErrors.title = 'Title is required'
      if (!category) newErrors.category = 'Category is required'
      if (!modeOfStudy) newErrors.modeOfStudy = 'Mode of study is required'
      if (!courseType) newErrors.type = 'Course type is required'
      if (!duration.trim()) newErrors.duration = 'Duration is required'
      if (!courseId && !thumbnailFile) newErrors.thumbnail = 'Thumbnail is required'
      if (!courseStatus) newErrors.status = 'Course status is required'
      if (!noOfVacancies || noOfVacancies <= 0) newErrors.noOfVacancies = 'No. of vacancies is required'
      if (Object.keys(newErrors).length) {
        setErrors(newErrors)
        return
      }
      setIsSaving(true)
      const payload = {
        title: courseTitle,
        description,
        category,
        whatYouWillLearn,
        location,
        modeOfStudy: modeOfStudy as ModeOfStudy,
        noOfVacancies,
        type: courseType as Course["type"],
        status: courseStatus === 'active',
        thumbnailFile,
        duration,
      };
      const res = courseId
        ? await updateCourse(courseId, payload as UpdateCourseDto & { thumbnailFile?: File })
        : await createCourse(payload as CreateCourseDto & { thumbnailFile?: File });
      if (!res.status) {
        // Map common backend errors to fields; otherwise show a form-level error
        const e: Record<string, string> = {}
        if (res.message?.toLowerCase().includes('title')) {
          e.title = res.message
        } else {
          e.form = res.message || 'Failed to create course'
        }
        setErrors(e)
        return
      }
      onSaved?.();
      onClose();
    } catch (e) {
      console.error(e);
      setErrors({ form: 'Failed to create course' })
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[900px] md:max-w-[1000px] max-h-[85vh] p-0 rounded-lg overflow-hidden bg-white overflow-y-auto">
        <DialogHeader className="p-3 px-6 border-b border-gray-200 flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-bold">{isEditing ? 'Edit Course' : 'Add Course'}</DialogTitle>
        </DialogHeader>
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {errors.form && (
            <div className="md:col-span-2 text-sm text-red-600">{errors.form}</div>
          )}
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="course-title" className="text-sm font-semibold text-gray-700">
              Course Title
            </label>
            <Input
              id="course-title"
              placeholder="Title"
              value={courseTitle}
              onChange={(e) => {
                setCourseTitle(e.target.value)
                if (errors.title) setErrors({ ...errors, title: '' })
              }}
              className="border-gray-300 focus:ring-[#FF2424]"
            />
            {errors.title && <p className="text-xs text-red-600">{errors.title}</p>}
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">Description</label>
            <RichTextEditor name="description" value={description} onChange={setDescription} onBlur={() => {}} />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-semibold text-gray-700">What you will learn</label>
            <RichTextEditor name="whatYouWillLearn" value={whatYouWillLearn} onChange={setWhatYouWillLearn} onBlur={() => {}} />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 md:col-span-2 md:col-start-1">
              <label htmlFor="category" className="text-sm font-semibold text-gray-700">
                Category
              </label>
              <Select value={category} onValueChange={(v) => {
                setCategory(v)
                if (errors.category) setErrors({ ...errors, category: '' })
              }}>
                <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat._id} value={cat._id}>{cat.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && <p className="text-xs text-red-600">{errors.category}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="mode-of-study" className="text-sm font-semibold text-gray-700">
              Mode of Study
            </label>
            <Select value={modeOfStudy} onValueChange={(v) => {
              setModeOfStudy(v as ModeOfStudy)
              if (errors.modeOfStudy) setErrors({ ...errors, modeOfStudy: '' })
            }}>
              <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={"ONLINE"}>Online</SelectItem>
                <SelectItem value={"OFFLINE"}>Offline</SelectItem>
                <SelectItem value={"HYBRID"}>Hybrid</SelectItem>
              </SelectContent>
            </Select>
            {errors.modeOfStudy && <p className="text-xs text-red-600">{errors.modeOfStudy}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="duration" className="text-sm font-semibold text-gray-700">
              Duration
            </label>
            <Input
              id="duration"
              placeholder="Write here"
              value={duration}
              onChange={(e) => {
                setDuration(e.target.value)
                if (errors.duration) setErrors({ ...errors, duration: '' })
              }}
              className="border-gray-300 focus:ring-[#FF2424]"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="upload-thumbnail" className="text-sm font-semibold text-gray-700">Upload Thumbnail</label>
            <div className="relative flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-md text-center select-none">
              {thumbnailFile || existingThumbnail ? (
                <div className="relative w-full h-40 mb-2">
                  <Image
                    src={thumbnailFile ? URL.createObjectURL(thumbnailFile) : (existingThumbnail || "")}
                    alt="Thumbnail preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    unoptimized
                  />
                </div>
              ) : (
                <UploadCloud className="h-8 w-8 text-gray-500 mb-2 pointer-events-none" />
              )}
              <p className="text-gray-600 pointer-events-none">
                {thumbnailFile ? thumbnailFile.name : existingThumbnail ? 'Current thumbnail' : "Click to upload or drag & drop"}
              </p>
              <input
                id="upload-thumbnail"
                type="file"
                accept="image/*"
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                onChange={(e) => {
                  setThumbnailFile(e.target.files?.[0])
                  if (errors.thumbnail) setErrors({ ...errors, thumbnail: '' })
                }}
              />
            </div>
            {errors.thumbnail && <p className="text-xs text-red-600">{errors.thumbnail}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="location" className="text-sm font-semibold text-gray-700">
              Location
            </label>
            <Input
              id="location"
              placeholder="Location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value)
              }}
              className="border-gray-300 focus:ring-[#FF2424]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">No. of Vacancies</label>
            <Input type="number" min={1} value={noOfVacancies} onChange={(e) => {
              setNoOfVacancies(Number(e.target.value) || 0)
              if (errors.noOfVacancies) setErrors({ ...errors, noOfVacancies: '' })
            }} className="border-gray-300 focus:ring-[#FF2424]" />
            {errors.noOfVacancies && <p className="text-xs text-red-600">{errors.noOfVacancies}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Course Type</label>
            <Select value={courseType} onValueChange={(v) => {
              setCourseType(v as Course["type"])
              if (errors.type) setErrors({ ...errors, type: '' })
            }}>
              <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]"><SelectValue placeholder="Select" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="TRENDING">Trending</SelectItem>
                <SelectItem value="UPCOMING">Upcoming</SelectItem>
                <SelectItem value="BEST_SELLER">Best Seller</SelectItem>
              </SelectContent>
            </Select>
            {errors.type && <p className="text-xs text-red-600">{errors.type}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="course-status" className="text-sm font-semibold text-gray-700">
              Course Status
            </label>
            <Select value={courseStatus} onValueChange={(v) => {
              setCourseStatus(v)
              if (errors.status) setErrors({ ...errors, status: '' })
            }}>
              <SelectTrigger className="w-full border-gray-300 focus:ring-[#FF2424]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="not-active">Not Active</SelectItem>
              </SelectContent>
            </Select>
            {errors.status && <p className="text-xs text-red-600">{errors.status}</p>}
          </div>
        </div>
        <div className="p-4 md:p-6 pt-4 border-t border-gray-200 flex justify-end">
          <Button className="bg-[#FF2424] hover:bg-[#FF2424]/90 text-white" onClick={handleSaveCourse} disabled={isSaving}>
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {isEditing ? 'Updating...' : 'Saving...'}
              </>
            ) : (
              isEditing ? 'Update Course' : 'Save Course'
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
