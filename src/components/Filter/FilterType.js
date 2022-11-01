const FilterType =  {
    ALL: 0,
    DOCUMENTARY: 1,
    COMEDY: 2,
    HORROR: 3,
    CRIME: 4,
    ACTION: 5
} 
export const resolveFilterName = (filter) => {
    const genre = Object.keys(FilterType).find(key => FilterType[key] === filter);
    return capitalizeFirstLetter(genre);
}

export const capitalizeFirstLetter = (word) => {
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1).toLowerCase();
    return firstLetterCap + remainingLetters;
}
export default FilterType;
