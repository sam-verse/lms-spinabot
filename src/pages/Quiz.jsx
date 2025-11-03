import React, { useState } from 'react';
import SubmitTestModal from '../components/TestSeries/SubmitTestModal';
import Header from '../components/Header/Header';

const questions = [
  {
    question: 'Which of the following is the longest river in India?',
    options: ['Ganga', 'Yamuna', 'Godavari', 'Narmada'],
  },
  {
    question: 'Who is known as the Father of the Indian Constitution?',
    options: ['Jawaharlal Nehru', 'B. R. Ambedkar', 'Mahatma Gandhi', 'Sardar Patel'],
  },
  {
    question: 'What is the capital of Rajasthan?',
    options: ['Jaipur', 'Jodhpur', 'Udaipur', 'Ajmer'],
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
  },
  {
    question: 'Who wrote the national anthem of India?',
    options: ['Bankim Chandra Chatterjee', 'Rabindranath Tagore', 'Sarojini Naidu', 'Subhash Chandra Bose'],
  },
];

const paletteColors = {
  answered: '#22c55e',
  notAnswered: '#d1d5db',
  flagged: '#facc15',
  current: '#3b82f6',
};

export default function Quiz() {
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [flagged, setFlagged] = useState([]);
  const [startTime] = useState(Date.now());

  const handleOption = (idx) => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[current] = idx;
      return copy;
    });
  };
  const handleFlag = () => {
    setFlagged((prev) =>
      prev.includes(current) ? prev.filter((f) => f !== current) : [...prev, current]
    );
  };
  const handleClear = () => {
    setAnswers((prev) => {
      const copy = [...prev];
      copy[current] = null;
      return copy;
    });
  };
  const handleNav = (idx) => setCurrent(idx);
  const handleNext = () => setCurrent((c) => Math.min(c + 1, questions.length - 1));
  const handlePrev = () => setCurrent((c) => Math.max(c - 1, 0));

  // Timer logic
  const [now, setNow] = useState(Date.now());
  React.useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const elapsed = Math.floor((now - startTime) / 1000);
  const remaining = 60 * 60 - elapsed; // 1 hour
  const mins = String(Math.floor(remaining / 60)).padStart(2, '0');
  const secs = String(remaining % 60).padStart(2, '0');

  return (
    <div className="bg-[#fafbfc] min-h-screen">
      <Header />
      {/* Test Title */}
      <div className="bg-white border-b px-8 py-3 flex items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xl font-semibold">UPSC Prelims Mock Test</span>
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-xs">General Studies</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full text-blue-700 font-semibold">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            00:{mins}:{secs}
          </div>
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 py-2 rounded-lg font-bold ml-2"
            onClick={() => setShowModal(true)}
          >
            Submit Test
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-8 px-4">
        {/* Left: Question */}
        <div className="flex-1 bg-white rounded-2xl shadow p-8 mb-8 md:mb-0">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-700 font-semibold">Question {current + 1} of {questions.length}</div>
            <button className="border px-3 py-1 rounded text-gray-600 text-sm hover:bg-gray-50" onClick={handleFlag}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="inline mr-1"><path d="M4 22V5a2 2 0 0 1 2-2h11.5a1 1 0 0 1 .8 1.6l-1.38 2.07a1 1 0 0 0 0 1.13l1.38 2.07a1 1 0 0 1-.8 1.6H6"/></svg>
              Flag for Review
            </button>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded mb-6">
            <div className="h-2 bg-blue-400 rounded" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
          </div>
          <div className="text-lg font-semibold mb-6">{questions[current].question}</div>
          <div className="space-y-4 mb-8">
            {questions[current].options.map((opt, idx) => (
              <label key={idx} className={`flex items-center px-6 py-3 rounded-lg border cursor-pointer transition-all ${answers[current] === idx ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'} hover:border-blue-400`}>
                <input
                  type="radio"
                  name={`q${current}`}
                  checked={answers[current] === idx}
                  onChange={() => handleOption(idx)}
                  className="mr-4 accent-blue-600"
                />
                <span className="text-base">{opt}</span>
              </label>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <button className="border px-4 py-2 rounded text-gray-600" onClick={handlePrev} disabled={current === 0}>Previous</button>
            <button className="border px-4 py-2 rounded text-gray-600" onClick={handleClear}>Clear Response</button>
            <button className="border px-4 py-2 rounded text-gray-600" onClick={handleNext} disabled={current === questions.length - 1}>Next</button>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 py-2 rounded-lg font-bold ml-auto"
              onClick={() => {
                // Save is implicit, just go to next if not last
                if (current < questions.length - 1) setCurrent(current + 1);
              }}
            >
              Save & Next
            </button>
          </div>
        </div>
        {/* Right: Palette */}
        <div className="w-full md:w-[340px] flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow p-0 mb-2 overflow-hidden">
            {/* Gradient header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-3">
              <span className="text-white font-semibold text-base">Question Palette</span>
            </div>
            {/* Stat box */}
            <div className="bg-gray-50 px-6 py-4 flex flex-col gap-2 text-[15px] border-b border-gray-200">
              <div className="flex justify-between mb-1">
                <div className="flex flex-col gap-0.5">
                  <span className="text-green-600 font-semibold">Answered: <span className="font-bold">{answers.filter((a) => a !== null).length}</span></span>
                  <span className="text-gray-600">Not Answered: <span className="font-bold">{answers.filter((a) => a === null).length}</span></span>
                </div>
                <div className="flex flex-col gap-0.5 text-right">
                  <span className="text-yellow-500 font-semibold">Flagged: <span className="font-bold">{flagged.length}</span></span>
                  <span className="text-gray-600">Total: <span className="font-bold">{questions.length}</span></span>
                </div>
              </div>
            </div>
            {/* Number grid */}
            <div className="px-6 py-3 flex flex-wrap gap-2 border-b border-gray-200">
              {questions.map((_, idx) => {
                let color = 'bg-white border-gray-300';
                let text = 'text-gray-700';
                if (answers[idx] !== null) { color = 'bg-green-500 border-green-500'; text = 'text-white'; }
                if (flagged.includes(idx)) { color = 'bg-yellow-400 border-yellow-400'; text = 'text-white'; }
                if (idx === current) { color = 'bg-blue-500 border-blue-500'; text = 'text-white'; }
                return (
                  <button
                    key={idx}
                    className={`w-9 h-9 rounded border text-base font-bold ${color} ${text} transition`}
                    onClick={() => handleNav(idx)}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
            {/* Legend */}
            <div className="px-6 py-3 border-b border-gray-200">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-green-500 inline-block border border-green-500" /> Answered</div>
                <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-white border border-gray-300 inline-block" /> Not Answered</div>
                <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-yellow-400 border border-yellow-400 inline-block" /> Flagged</div>
                <div className="flex items-center gap-2"><span className="w-4 h-4 rounded bg-blue-500 border border-blue-500 inline-block" /> Current</div>
              </div>
            </div>
            {/* Submit button */}
            <div className="px-6 py-4">
              <button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white font-bold py-3 rounded-lg"
                onClick={() => setShowModal(true)}
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      </div>
      <SubmitTestModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={() => { setShowModal(false); /* handle real submit here */ }}
        answered={answers.filter((a) => a !== null).length}
        notAnswered={answers.filter((a) => a === null).length}
        flagged={flagged.length}
      />
    </div>
  );
}
