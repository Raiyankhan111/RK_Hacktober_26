import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Camera, RefreshCw, X, AlertCircle } from 'lucide-react';

interface CameraCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (imageDataUrl: string) => void;
}

export const CameraCaptureModal: React.FC<CameraCaptureModalProps> = ({
  isOpen,
  onClose,
  onCapture,
}) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      stopCamera();
      return;
    }

    startCamera(facingMode);

    return () => {
      stopCamera();
    };
  }, [isOpen, facingMode]);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const startCamera = async (mode: 'environment' | 'user') => {
    stopCamera();
    setIsStarting(true);
    setErrorMsg(null);

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera access is not supported by your browser.');
      }

      const constraints: MediaStreamConstraints = {
        video: {
          facingMode: { ideal: mode },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch((e) => console.warn('Video play error:', e));
      }
    } catch (err: any) {
      console.error('Camera access error:', err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setErrorMsg('Camera permission was denied. Please allow camera access in your browser settings or upload a saved photo.');
      } else {
        setErrorMsg('Unable to access camera: ' + (err.message || 'Unknown device error'));
      }
    } finally {
      setIsStarting(false);
    }
  };

  const handleCapture = () => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      stopCamera();
      onCapture(dataUrl);
      onClose();
    }
  };

  const toggleCameraFacing = () => {
    setFacingMode((prev) => (prev === 'environment' ? 'user' : 'environment'));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-stone-900 text-white shadow-2xl border border-stone-800">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-800 px-5 py-4">
          <div className="flex items-center gap-2">
            <Camera className="h-5 w-5 text-emerald-400" />
            <h3 className="font-semibold text-base sm:text-lg">
              {t.detect.cameraModalTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-stone-400 hover:bg-stone-800 hover:text-white transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Preview or Error State */}
        <div className="relative aspect-video sm:aspect-4/3 w-full bg-black flex items-center justify-center overflow-hidden">
          {errorMsg ? (
            <div className="p-6 text-center max-w-md">
              <AlertCircle className="mx-auto h-12 w-12 text-amber-400 mb-3" />
              <p className="text-sm text-stone-300 mb-4">{errorMsg}</p>
              <button
                onClick={() => startCamera(facingMode)}
                className="inline-flex items-center gap-2 rounded-xl bg-forest-700 px-4 py-2 text-sm font-medium text-white hover:bg-forest-600"
              >
                <RefreshCw className="h-4 w-4" /> Try Again
              </button>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                playsInline
                muted
                autoPlay
                className="h-full w-full object-cover"
              />
              
              {/* Visual Leaf Viewfinder Frame */}
              <div className="pointer-events-none absolute inset-8 sm:inset-12 border-2 border-dashed border-emerald-400/70 rounded-2xl flex flex-col justify-between p-3">
                <div className="flex justify-between text-[11px] text-emerald-300 font-medium bg-black/40 px-2 py-1 rounded backdrop-blur-xs self-start">
                  Position infected leaf inside frame
                </div>
                <div className="self-end text-[11px] text-emerald-300 font-medium bg-black/40 px-2 py-1 rounded backdrop-blur-xs">
                  Ensure good daylight
                </div>
              </div>

              {isStarting && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
                </div>
              )}
            </>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-around border-t border-stone-800 bg-stone-950 px-6 py-5">
          <button
            type="button"
            onClick={toggleCameraFacing}
            title={t.detect.switchCamBtn}
            className="flex flex-col items-center gap-1 text-xs text-stone-400 hover:text-white transition"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-800 hover:bg-stone-700">
              <RefreshCw className="h-5 w-5 text-stone-200" />
            </div>
            <span>{t.detect.switchCamBtn}</span>
          </button>

          {/* Shutter Button */}
          <button
            type="button"
            onClick={handleCapture}
            disabled={Boolean(errorMsg) || isStarting}
            className="group relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-harvest-400 shadow-lifted transition-transform active:scale-95 disabled:opacity-50"
          >
            <div className="h-10 w-10 rounded-full bg-harvest-500 group-hover:scale-105 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex flex-col items-center gap-1 text-xs text-stone-400 hover:text-white transition"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-stone-800 hover:bg-stone-700">
              <X className="h-5 w-5 text-stone-200" />
            </div>
            <span>{t.detect.closeCamBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
