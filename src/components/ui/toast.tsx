import { useEffect, useState } from 'react'

interface ToastProps {
  message: string
  type: 'success' | 'error'
}

const Toast = ({ message, type }: ToastProps) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000)  
    return () => clearTimeout(timer)
  }, [])

  return (
    visible && (
      <div
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-lg text-white ${
          type === 'error' ? 'bg-red-500' : 'bg-green-500'
        }`}
      >
        {message}
      </div>
    )
  )
}

export default Toast
