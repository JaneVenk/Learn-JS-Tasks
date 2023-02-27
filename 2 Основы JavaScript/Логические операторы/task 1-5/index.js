alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // сначала выполнится alert(1), затем alert(2)
alert( 1 && null && 2 ); // null
alert( alert(1) && alert(2) ); // выполнится alert(1), затем undefined
alert( null || 2 && 3 || 4 ); // 3



