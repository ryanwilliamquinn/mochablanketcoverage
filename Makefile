test:
	@./node_modules/.bin/mocha -r blanket -R json-cov

.PHONY: test
