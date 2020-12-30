const checkMillionDollarIdea = (idea) => {
  if (idea.weeklyRevenue * idea.numWeeks >= 1000000) {
    return true;
  }
  return false;
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
