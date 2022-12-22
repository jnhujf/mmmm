const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'7b5c923e-fbe5-45d2-977a-0ce614ab893c'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
