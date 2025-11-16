(define (A x y)
  (cond ((= y 0) 0)
        ((= x 0) (* 2 y))
        ((= y 1) 2)
        (else (A (- x 1) (A x (- y 1))))))

(define (ackermann m n)
  (cond ((= m 0) (+ n 1))
        ((= n 0) (ackermann (- m 1) 1))
        (else (ackermann (- m 1) (ackermann m (- n 1))))))


(A 1 10) ;1024

(A 1 1) ;2
(A 1 2) ;4
(A 1 3) ;8
(A 1 4) ;16
(A 1 5) ;32
; (A 1 y) = 2**y or 2<sup>y</sup>


; (A 2 1) ;2
;(A 2 2) ;4
;(A 2 3) ;16
;(A 2 4) ;65536

(A 0 2)
(A 0 3)
(A 0 4)
