function confirmEnding(str, target) {
		 
  if ( str.substr(str.length - target.length, target.length) === target) {return true;}
  return false;
}

confirmEnding("Bastian", "n");