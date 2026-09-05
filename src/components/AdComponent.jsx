import React, { useEffect, useRef } from 'react';

const isDev = process.env.NODE_ENV === 'development';

const AdComponent = ({ adSlot, format = 'auto', style = {} }) => {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (isDev || pushed.current) return;

    const tryPush = () => {
      if (pushed.current) return;
      try {
        if (window.adsbygoogle !== undefined && adRef.current) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushed.current = true;
        }
      } catch (e) {
        pushed.current = true;
        console.warn('AdSense:', e.message);
      }
    };

    tryPush();

    if (!pushed.current) {
      const t1 = setTimeout(tryPush, 500);
      const t2 = setTimeout(tryPush, 1500);
      const t3 = setTimeout(tryPush, 3000);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isDev) {
    return (
      <div style={{
        background: 'repeating-linear-gradient(45deg,#f5f5f5,#f5f5f5 8px,#ebebeb 8px,#ebebeb 16px)',
        border: '1.5px dashed #bbb',
        borderRadius: '8px',
        padding: '0.75rem 1rem',
        textAlign: 'center',
        color: '#aaa',
        fontSize: '0.78rem',
        fontFamily: 'monospace',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        minHeight: '90px',
        width: '100%',
        ...style,
      }}>
        <span>📢 Anuncio — slot <strong style={{ color: '#999' }}>{adSlot}</strong> (solo en producción)</span>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', overflow: 'hidden', textAlign: 'center', minHeight: '90px', ...style }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8724519668955265"
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdComponent;

