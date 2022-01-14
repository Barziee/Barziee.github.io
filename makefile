
.PHONY: deploy

build:
	npm run build

deploy:
	${MAKE} build
	git subtree push --prefix dist origin gh-pages

upgrade:
	npm install

run:
	npm run serve

lint:
	npm run lint
