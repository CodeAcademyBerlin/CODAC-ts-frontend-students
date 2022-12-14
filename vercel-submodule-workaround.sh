# github submodule repo address without https:// prefix
SUBMODULE_GITHUB=github.com/CodeAcademyBerlin/content
# .gitmodules submodule path
SUBMODULE_PATH=content

# github access token is necessary
# add it to Environment Variables on Vercel
if [ "$GITHUB_ACCESS_TOKEN" == "" ]; then
  echo "Error: GITHUB_ACCESS_TOKEN is empty"
  exit 1
fi
# stop execution on error - don't let it build if something goes wrong
set -e

# set up an empty temporary work directory
rm -rf content || true # remove the tmp folder if exists

git clone https://$GITHUB_ACCESS_TOKEN@$SUBMODULE_GITHUB