

/**
 *  官方给出的 Java版解决方案， 但用时 36ms；竟然比我的慢了好多。
 *  是不是计算的用时要远远大于排序的用时
 *  同样代码的C++版， 用时仅16ms，这和语言呀有关系？？？
 */
class Solution{

    public int reverse(int x) {
        int rev = 0;
        while (x != 0) {
            int pop = x % 10;
            x /= 10;
            if (rev > Integer.MAX_VALUE/10 || ( rev == Integer.MAX_VALUE/10 && pop > 7 ))  return 0;
            if (rev < Integer.MIN_VALUE/10 || ( rev == Integer.MIN_VALUE/10 && pop < -8 )) return 0;
            rev = rev * 10 + pop;
        }
        return rev;
    }
}