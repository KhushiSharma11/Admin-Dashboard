// Example API function to fetch admin data
export const fetchAdminData = async () => {
  const response = await fetch('/api/admin/dashboard'); // API endpoint to fetch admin data
  if (!response.ok) {
    throw new Error('Failed to fetch admin data');
  }
  return await response.json();
};
