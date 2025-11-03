
import { useNavigate } from "react-router-dom";

export default function SubmitTestModal({ open, onClose, onSubmit, answered, notAnswered, flagged }) {
  const navigate = useNavigate();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-fade-in">
        <div className="text-lg font-semibold mb-4">Submit Test Confirmation</div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 flex items-center gap-2 mb-4">
          <svg width="22" height="22" fill="none" stroke="#fbbf24" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><circle cx="12" cy="16" r="1"/></svg>
          <span className="text-gray-700 text-sm">Once submitted, you cannot change your answers.<br/>Are you sure you want to submit?</span>
        </div>
        <div className="flex gap-3 mb-6">
          <div className="flex-1 bg-green-50 rounded-lg flex flex-col items-center py-3">
            <span className="text-green-600 text-2xl font-bold">{answered}</span>
            <span className="text-xs text-gray-600 mt-1">Answered</span>
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg flex flex-col items-center py-3">
            <span className="text-gray-700 text-2xl font-bold">{notAnswered}</span>
            <span className="text-xs text-gray-600 mt-1">Not Answered</span>
          </div>
          <div className="flex-1 bg-yellow-50 rounded-lg flex flex-col items-center py-3">
            <span className="text-yellow-500 text-2xl font-bold">{flagged}</span>
            <span className="text-xs text-gray-600 mt-1">Flagged</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="flex-1 border border-gray-300 rounded-lg py-2 font-semibold text-gray-700 hover:bg-gray-100"
            onClick={onClose}
          >
            Review Again
          </button>
          <button
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-lg py-2 font-semibold hover:opacity-90"
            onClick={() => { if (onSubmit) onSubmit(); navigate('/test-completed'); }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
