function str_reverse(str)
{
	reversed = str.split("").reverse().join("");
	
	print("Reversing string: " + str);
	print("Result: " + reversed);
	
	return reversed;
}
