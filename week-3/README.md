 Snail Loading Indicator
Given a number n, an n-size snail loading indicator is one where a square made
of n x n subsquares fills in each square one-by-one (in white) in a clockwise
outside-in snail pattern.
Key:
B = Black
W = White
Forn=1,k∈{0,1,2, ...}
Step 0  Step 1
Step 2  Step 3
Step 4  Step 5
Step 2k Step 2k-1
[[B]], [[W]]
Forn=2,k∈{0,1,2, ...}
Step0 Step1 Step2 Step3 Step4 Step5 Step6 Step7 Step8 Step9
 Step 5k
 [[B, B],
[B, B]],
Step 5k-4  Step 5k-3  Step 5k-2  Step 5k-1
[[W, B],   [[W, W],   [[W, W],
 [B, B]],   [B, B]],   [B, W]],
[[W, W],
 [W, W]],
 For n = 4, the squares would be filled
out in this order (image right):
Your task is to create a form or set of
inputs which together when submitted
creates an n-size loading indicator for
(theoretically, anyway) any n.
The loading indicator should infinitely
loop, until a ‘Finish Loading’ button is
clicked, after which is should complete
the loop it is currently on, and
disappear.
The presentation of such an interface is
down to you :D
Bonus moral points will be for a solution that allows you to input a width in
pixels (or your favorite CSS unit) for the dimensions of the loading
indicator.
Good luck.
