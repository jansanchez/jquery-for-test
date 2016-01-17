function complexFunction(){
	flag = true;
	openssl = true;
	if (flag === true) {
		if (openssl === true) {
			add_libs = "--libs openssl";
		}else{
			add_libs = "--libs common";
		}
	}else{
		if (openssl === true) {
			add_libs = "--libs openssl";
		}else{
			add_libs = "--libs common";	
		}
	}
	return add_libs;
}

function noComplexFunction(){
	openssl = true;
	add_libs = "--libs common";
	if (openssl === true) {
		add_libs = "--libs openssl";
	}
	return add_libs;
}
