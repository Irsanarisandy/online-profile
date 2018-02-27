.PHONY: clean
clean:
	rm -rf build

.PHONY: full_clean
full_clean:
	rm -rf build node_modules

.PHONY: deploy
deploy:
	rm -rf build
	npm run deploy

.PHONY: hard_deploy
hard_deploy:
	rm -rf build node_modules
	npm install
	npm run deploy