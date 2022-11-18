window.addEventListener('load',function(){

    const _msb=document.querySelector('#msb');
    const _msbXal=document.querySelector('#msbXal');
    const _mhm=document.querySelector('#mhm');
    const _mhmXal=document.querySelector('#mhmXal');

    const _das=document.querySelector('#das');
    const _kagiz=document.querySelector('#kagiz');
    const _qayci=document.querySelector('#qayci');

    const _msj=document.querySelector('#msj');

    var status=true;


    var msbXal=0;
    var mhmXal=0;
    var msbObj='';
    var mhmObj='';
    const obj=['das','kagiz','qayci'];

    const sablon={
        'das':'qayci',
        'kagiz':'das',
        'qayci':'kagiz'
    }; 

    _msb.innerText='Musab';
    _mhm.innerText='Muhammed';
    _msbXal.innerText=msbXal;
    _mhmXal.innerText=mhmXal;
    _msj.innerText=`${_msb.innerText} Please Select`;


    _das.addEventListener('click', function(){

        if(status){
            msbObj=obj[0];
            status=false;
            _das.classList.add('secildi');

            _msj.innerText=`${_mhm.innerText} Please Select`;

            window.setTimeout(mhm,3000);
        }
              
    });
    _kagiz.addEventListener('click', function(){

        if(status){
            msbObj=obj[1];
            status=false;
            _kagiz.classList.add('secildi');
            
            window.setTimeout(mhm,3000);
        }
        
        
    });
    
    _qayci.addEventListener('click', function(){

        if(status){
            msbObj=obj[2];
            status=false;
            _qayci.classList.add('secildi');
            
            window.setTimeout(mhm,3000);
        }
        
        
    });
    
    function mhm(){
        let index=Math.round(Math.random()*(obj.length-1));
        mhmObj=obj[index];

        if(sablon[mhmObj]==msbObj){

            _mhmXal.innerText= ++mhmXal;
            _msj.innerText=`${_mhm.innerText} You are Win`;
        }
            
        if(sablon[msbObj]==mhmObj){
            _msbXal.innerText= ++msbXal;
            _msj.innerText=`${_msb.innerText} You are Win`;
        }


        window.setTimeout(function(){
 
            _das.classList.remove('secildi');
            _kagiz.classList.remove('secildi');
            _qayci.classList.remove('secildi');
            
            status=true;

            _msj.innerText=`${_msb.innerText} Please Select`;

        },1000);
        
    }

});