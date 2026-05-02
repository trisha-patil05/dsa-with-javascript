function permutations(arr) {
  if (arr.length <= 1) return [arr];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    for (let p of permutations(rest)) result.push([arr[i], ...p]);
  }
  return result;
}
// Time:  O(n!) — n × (n-1) × (n-2) × ... × 1
// Space: O(n!) — stores all permutations in result array