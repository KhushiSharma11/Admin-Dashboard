export const fetchAdminData = async () => {
  const response = await fetch('/api/admin/dashboard');
  if (!response.ok) {
    throw new Error('Failed to fetch admin data');
  }
  return await response.json();
};
