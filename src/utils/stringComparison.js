// Calculates the Levenshtein distance between two strings
export const levenshteinDistance = (str1 = '', str2 = '') => {
    const track = Array(str2.length + 1).fill(null).map(() =>
        Array(str1.length + 1).fill(null)
    );

    for (let i = 0; i <= str1.length; i += 1) {
        track[0][i] = i;
    }
    for (let j = 0; j <= str2.length; j += 1) {
        track[j][0] = j;
    }

    for (let j = 1; j <= str2.length; j += 1) {
        for (let i = 1; i <= str1.length; i += 1) {
            const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
            track[j][i] = Math.min(
                track[j][i - 1] + 1, // deletion
                track[j - 1][i] + 1, // insertion
                track[j - 1][i - 1] + indicator // substitution
            );
        }
    }
    return track[str2.length][str1.length];
};

// Checks if the user answer is correct, allowing for minor typos
// We allow 1 error for every 5 characters (approx)
export const isAnswerCorrect = (userAnswer, expectedAnswer) => {
    const normalizedUser = userAnswer.trim().toLowerCase();
    const normalizedExpected = expectedAnswer.trim().toLowerCase();

    if (normalizedUser === normalizedExpected) return true;

    const distance = levenshteinDistance(normalizedUser, normalizedExpected);
    const maxErrorsAllowed = Math.max(1, Math.floor(normalizedExpected.length / 5));

    return distance <= maxErrorsAllowed;
};
