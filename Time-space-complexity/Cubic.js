function matrixMultiply(A, B, n) {
  const C = Array.from({length: n}, () => Array(n).fill(0));
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      for (let k = 0; k < n; k++)
        C[i][j] += A[i][k] * B[k][j];
  return C;
}
// Time:  O(n³) — 3 nested loops
// Space: O(n²) — result matrix C of size n×n