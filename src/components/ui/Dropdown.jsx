import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Accessible Dropdown
 *
 * Props:
 * - trigger: React node used as the clickable trigger
 * - children: menu content (links, buttons)
 * - align: 'right' | 'left' positioning of menu
 */
const Dropdown = ({ trigger, children, align = 'right', className = '' }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target) || (triggerRef.current && triggerRef.current.contains(e.target))) return;
      setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('touchstart', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('touchstart', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    // focus first focusable element inside menu (if any)
    const first = ref.current && ref.current.querySelector('button, [href], [tabindex]:not([tabindex="-1"])');
    if (first) first.focus();
  }, [open]);

  const menuPosition = align === 'right' ? 'right-0' : 'left-0';

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <div ref={triggerRef} onClick={() => setOpen(v => !v)} aria-expanded={open} aria-haspopup="menu">
        {trigger}
      </div>

      <div
        ref={ref}
        role="menu"
        aria-hidden={!open}
        className={`origin-top-right absolute mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 transition-opacity duration-150 z-50 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'} ${menuPosition}`}
        style={{ minWidth: 200 }}
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node,
  align: PropTypes.oneOf(['right', 'left']),
  className: PropTypes.string,
};

export default Dropdown;
