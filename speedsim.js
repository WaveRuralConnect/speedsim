function showSpeed(size, desc) {
    
    var gigtime=((size*8) / 1000);
    var medtime=((size*8) / 100);
    var slowtime=((size*8) / 50);
    
    document.getElementById('fast').innerHTML='';
    document.getElementById('slow').innerHTML='';
    document.getElementById('medium').innerHTML='';
    
    var slow = new ProgressBar.Line('#slow', {
        color: '#3d7f9b',
        duration: 1000 * slowtime,
        easing: 'linear'
    });

    
    slow.animate(1);

    
    var medium = new ProgressBar.Line('#medium', {
        color: '#3d7f9b',
        duration: 1000 * medtime,
        easing: 'linear'
    });
    

    medium.animate(1);
    
    var fast = new ProgressBar.Line('#fast', {
        color: '#3d7f9b',
        duration: 1000 * gigtime,
        easing: 'linear'
    });

    fast.animate(1);
    
    document.getElementById('filesize').innerHTML='File: ' + desc;
    
    if (Math.round(gigtime) < 1) {
        document.getElementById('gigtime').innerHTML='<1 second'; 
    } else if (Math.round(gigtime) === 1) {
        document.getElementById('gigtime').innerHTML = '1 second';
    } 
    
    else if (gigtime < 60) {
        document.getElementById('gigtime').innerHTML=Math.round(gigtime) + ' seconds';
    } else {
        document.getElementById('gigtime').innerHTML=(gigtime /60).toFixed(2) + ' minutes'
    }
    
    
    if (Math.round(medtime) < 1) {
        document.getElementById('medtime').innerHTML='<1 second';
    } else if (medtime < 60) {
        document.getElementById('medtime').innerHTML=Math.round(medtime) + ' seconds';
    } else {
        document.getElementById('medtime').innerHTML=(medtime /60).toFixed(0) + ' minutes ' + medtime % 60 + ' seconds' 
    }
    
    
    if(Math.round(slowtime) <1){
       document.getElementById('slowtime').innerHTML='<1 second'; 
    } else if (slowtime < 60) {
        document.getElementById('slowtime').innerHTML=Math.round(slowtime) + ' seconds';
    } else {
        document.getElementById('slowtime').innerHTML=(slowtime /60).toFixed(0) + ' minutes ' + slowtime % 60 + ' seconds'
    }
    
    
};

