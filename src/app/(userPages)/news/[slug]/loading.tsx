export default function LoadingBlogDetail() {
  return (
    <main className="max-w-[1366px] mx-auto px-4 md:px-8 lg:px-16 py-10 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Article Skeleton */}
        <article className="lg:col-span-2">
          {/* Featured Card placeholder */}
          <div className="mb-10">
            <div className="h-64 w-full bg-gray-200 rounded-xl" />
          </div>
          <section className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
            <div className="space-y-4">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className={`h-4 bg-gray-200 rounded ${i % 5 === 4 ? 'w-2/3' : 'w-full'}`} />
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar Skeleton */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="sticky top-28 flex flex-col gap-8">
            {/* Latest Blogs box */}
            <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
              <div className="h-4 w-32 bg-gray-200 rounded mb-6" />
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-2 bg-gray-200 rounded w-1/2" />
                  </div>
                ))}
              </div>
            </div>
            {/* Share box */}
            <div className="border border-gray-300 rounded-xl p-6 bg-white shadow-sm">
              <div className="h-4 w-40 bg-gray-200 rounded mb-6" />
              <div className="flex gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="h-8 w-8 bg-gray-200 rounded-full" />
                ))}
              </div>
              <div className="h-2 w-2/3 bg-gray-200 rounded mt-4" />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
