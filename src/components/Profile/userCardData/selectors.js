export const getProfileData = state => state.profile;
export const isProfileFilled = state => {
  if (
    state.profile.name &&
    state.profile.date &&
    state.profile.card &&
    state.profile.cvv
  )
    return true;

  return false;
};
