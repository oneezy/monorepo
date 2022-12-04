# variables
##################################################################

# Your Directory
HERE=$(pwd)

# Main App
APP="$HERE"/apps/+app
STATIC="$HERE"/apps/+app/static
ROUTES="$HERE"/apps/+app/src/routes

# New Apps
NEW="$HERE"/apps


# docs app
##################################################################
if test -d "$ROUTES"/docs; then
  # failure message
  echo "🟨 docs already exists"
else
  # docs: Create "static" symlink folder 
  ln -s "$STATIC" "$NEW"/docs

  # docs: Create "routes" symlink folder
  ln -s "$NEW"/docs/src/routes "$ROUTES"
  mv "$ROUTES"/routes "$ROUTES"/docs

  # Success message
  pnpm echo "✅ docs symlinks created"
fi


# site app
##################################################################
if test -d "$ROUTES"/site; then
  # failure message
  echo "🟨 site already exists"
else
  # site: Create "static" symlink folder 
  ln -s "$STATIC" "$NEW"/site

  # site: Create "routes" symlink folder
  ln -s "$NEW"/site/src/routes "$ROUTES"
  mv "$ROUTES"/routes "$ROUTES"/site

  # Success message
  pnpm echo "✅ site symlinks created"
fi