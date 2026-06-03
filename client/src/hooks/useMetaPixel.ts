/**
 * Hook para rastrear eventos do Meta Pixel
 * Permite rastrear conversões e eventos customizados
 */

export const useMetaPixel = () => {
  const trackEvent = (eventName: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName, data);
    }
  };

  const trackLead = (data?: Record<string, any>) => {
    trackEvent('Lead', data);
  };

  const trackViewContent = (data?: Record<string, any>) => {
    trackEvent('ViewContent', data);
  };

  const trackAddToCart = (data?: Record<string, any>) => {
    trackEvent('AddToCart', data);
  };

  const trackInitiateCheckout = (data?: Record<string, any>) => {
    trackEvent('InitiateCheckout', data);
  };

  const trackPurchase = (data?: Record<string, any>) => {
    trackEvent('Purchase', data);
  };

  return {
    trackEvent,
    trackLead,
    trackViewContent,
    trackAddToCart,
    trackInitiateCheckout,
    trackPurchase,
  };
};
