function work(a, b) {
    console.log( a + b );
  }

  function spy(f){
    function outf(...args) {
        outf.calls.push(args);
        return f.apply(this, args);
      }
    
      outf.calls = [];
    
      return outf;
  };
  
  work = spy(work);
  
  work(1, 2); // 3
  work(4, 5); // 9
  
  for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
  }