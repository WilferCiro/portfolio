export const suscribe = (values: any) => {
	return fetch("/api/subscribe", {
		"method": "POST",
		"headers": { "content-type": "application/json" },
		"body": JSON.stringify(values)
	}).then(result => result)
}