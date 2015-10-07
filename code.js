function plus() {
   mokuteki = document.getElementById("num");
   count = mokuteki.innerHTML;
   now_count = parseInt(count);
   if(now_count < 10) {
	now_count++;
	mokuteki.innerHTML = now_count;
   }

}

function minus(str) {
   mokuteki = document.getElementById("num");
   count = mokuteki.innerHTML;
   now_count = parseInt(count);
   if(now_count > 0) {
	now_count--;
	mokuteki.innerHTML = now_count;
   }
}

function reset(str) {


}
