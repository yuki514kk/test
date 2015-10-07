function plus() {
   mokuteki = document.getElementById("num");
   count = mokuteki.innerHTML;
   now_count = parseInt(count);
   if(now_count < 10) {
	now_count++;
	mokuteki.innerHTML = now_count;
   }

}

function minus() {
   mokuteki = document.getElementById("num");
   count = mokuteki.innerHTML;
   now_count = parseInt(count);
   if(now_count > 0) {
	now_count--;
	mokuteki.innerHTML = now_count;
   }
}

function reset(count) {
   mokuteki = document.getElementById("num");
   mokuteki.innerHTML = 0;
}
