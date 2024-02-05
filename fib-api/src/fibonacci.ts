/**
 * n番目のフィボナッチ数を返します。
 * 入力値は1以上の整数であることを前提としています。
 * @param n フィボナッチ数の番号(1以上の整数)
 */
export const fibonacci = (n: number): bigint => {
    // zero-based indexのメモ化用マップ
    // i = 0, 1 (n = 1, 2) のときの値は予め定義しておく
    const memo = new Map<number, bigint>([
        [0, 1n],
        [1, 1n],
    ]);
    // プライベートな再帰関数。zero-based indexを使用する。
    const _fib = (j: number): bigint => {
        // メモ化されている値があればそれを返す
        if (memo.has(j)) return memo.get(j)!;
        // フィボナッチ数の計算
        const result = _fib(j - 1) + _fib(j - 2);
        // 計算結果をメモ化
        memo.set(j, result);
        return result;
    };
    // 1-based indexをzero-based indexに変換して再帰関数を呼び出す
    return _fib(n - 1);
};
