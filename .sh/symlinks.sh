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


# symlinks function
##################################################################
create_symlinks() {

  if test -d "$ROUTES"/$1; then
    # failure message
    echo "🟨 $1 already exists"
  else
    # site: Create "static" symlink folder 
    ln -s "$STATIC" "$NEW"/$1

    # site: Create "routes" symlink folder
    ln -s "$NEW"/$1/src/routes "$ROUTES"
    mv "$ROUTES"/routes "$ROUTES"/$1

    # Success message
    pnpm echo "✅ $1 symlinks created"
  fi

}

# create symlinks
create_symlinks "docs"
create_symlinks "site"