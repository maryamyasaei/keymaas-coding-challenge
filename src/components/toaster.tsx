interface IProps {
    message: string
    visible: boolean
    onClose?: () => void
}

export default function Toaster({ message, visible, onClose }: IProps) {
    if(!visible) {
        return null
    }

    return (
        <div id="toast-danger" 
            className="fixed left-5 bottom-5 flex items-center w-full max-w-xs p-4 mb-4 dark:text-gray-500 dark:bg-white rounded-lg shadow text-gray-400 bg-gray-800" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 dark:text-red-500 dark:bg-red-100 rounded-lg bg-red-800 text-red-200">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                </svg>
                <span className="sr-only">Error icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">
                {message}
            </div>

            <button onClick={() => onClose?.()} type="button" className="ml-auto -mx-1.5 -my-1.5 dark:bg-white dark:text-gray-400 dark:hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 dark:hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 text-gray-500 hover:text-white bg-gray-800 hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
    )
}