// API Configuration
let cachedBackendUrl = null;

/**
 * Get backend URL from settings or use default
 * @returns {Promise<string>} Backend URL
 */
export async function getBackendUrl() {
  // Return cached value if available
  if (cachedBackendUrl) {
    return cachedBackendUrl;
  }

  // Check localStorage first
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('backend_url');
    if (stored) {
      cachedBackendUrl = stored;
      return stored;
    }
  }

  try {
    // Fetch from settings API (using default URL)
    const defaultUrl = 'http://localhost:30011';
    const response = await fetch(`${defaultUrl}/api/settings`);
    
    if (response.ok) {
      const settings = await response.json();
      const backendSetting = settings.find(s => s.setting_key === 'backend_url');
      
      if (backendSetting && backendSetting.setting_value) {
        cachedBackendUrl = backendSetting.setting_value;
        
        // Save to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('backend_url', cachedBackendUrl);
        }
        
        return cachedBackendUrl;
      }
    }
  } catch (error) {
    console.error('Error fetching backend URL from settings:', error);
  }

  // Fallback to default
  const fallbackUrl = 'http://localhost:3001';
  cachedBackendUrl = fallbackUrl;
  return fallbackUrl;
}

/**
 * Clear cached backend URL (useful after settings update)
 */
export function clearBackendUrlCache() {
  cachedBackendUrl = null;
  if (typeof window !== 'undefined') {
    localStorage.removeItem('backend_url');
  }
}

/**
 * Get API URL with endpoint
 * @param {string} endpoint - API endpoint (e.g., '/api/content')
 * @returns {Promise<string>} Full API URL
 */
export async function getApiUrl(endpoint) {
  const backendUrl = await getBackendUrl();
  // Remove trailing slash from backend URL and leading slash from endpoint if both exist
  const cleanBackendUrl = backendUrl.replace(/\/$/, '');
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${cleanBackendUrl}${cleanEndpoint}`;
}

/**
 * Fetch data from API with dynamic backend URL
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise<Response>} Fetch response
 */
export async function apiFetch(endpoint, options = {}) {
  const url = await getApiUrl(endpoint);
  return fetch(url, options);
}
