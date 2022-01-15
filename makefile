
.PHONY: deploy build upgrade run

build:
	npm run build

deploy:
	${MAKE} build
	git subtree split --prefix dist main > hash.tmp
	git push origin $(file < hash.tmp):gh-pages --force

init_deploy:
	git subtree push --prefix dist origin gh-pages

upgrade:
	npm install

run:
	npm run serve

lint:
	npm run lint

