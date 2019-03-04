// Объясните почему код даёт именно такие результаты?
"use strict";

let a = 1, b = 1, c, d;

c = ++a;
alert(c); // 2 - префиксный инкремент увеличивает значение  переменной a и присваивает его в переменную с

d = b++;
alert(d); // 1 - постфиксный инкремент сначала присваивает значение b в переменную d b только потом увеличивает значение b

c = 2 + ++a;
alert(c); // 5 - значение a уже увеличено в строке 5, здесь оно увеличивается снова и прибавляется двойка

d = 2 + b++;
alert(d); // 4 - значение b уже увеличено в строке 8, прибавляется 2 и присваивается в d, только потом срабатывает инкремент.

alert(a); // 3 - значение a увеличено два раза: в строке 5 и 11
alert(b); // 3 - значение b увеличено два раза: в строке 8 и 14

