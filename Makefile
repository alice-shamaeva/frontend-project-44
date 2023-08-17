install:
	npm ci 
brain-games:
	node bin/brain-games.js
publish: 
	npm publish --dry-run
lint:
	npx eslint .
brain-even:
	node bin/games/brain-even.js
braun-calc:
	node bin/games/brain-calc