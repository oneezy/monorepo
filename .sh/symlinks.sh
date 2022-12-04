# variables
##################################################################

# Your Directory
HERE=$(pwd)

# Main App
APP=./apps/+app
STATIC=./apps/+app/static
ROUTES=./apps/+app/src/routes

# New Apps
NEW=./apps


# symlinks function
##################################################################
create_route() {

  if test -d apps/+app/src/routes/$1; then
    # failure message
    pnpm exec echo " ❌ $1 symlink route exists"
    pnpm exec echo " ❌ $1 symlink route exists"
    pnpm exec echo " ❌ $1 symlink route exists"
    pnpm exec echo " "
  else
    # create route symlink
    cd apps/+app/src/routes
    ln -s ../../../$1/src/routes $1
    cd ../../../..

    # Success message
    pnpm exec echo " ✅ $1 symlink route created"
    pnpm exec echo " ✅ $1 symlink route created"
    pnpm exec echo " ✅ $1 symlink route created"
    pnpm exec echo " "
  fi

}

# creat static 
##################################################################
create_static() {

  if test -d apps/$1/static; then
    # failure message
    pnpm exec echo " ❌ $1 static folder exists"
    pnpm exec echo " ❌ $1 static folder exists"
    pnpm exec echo " ❌ $1 static folder exists"
    pnpm exec echo " "
  else
    # create static folder
    cd apps/$1
    ln -s ../+app/static static
    cd ..

    pnpm exec echo " ✅ $1 static folder created"
    pnpm exec echo " ✅ $1 static folder created"
    pnpm exec echo " ✅ $1 static folder created"
    pnpm exec echo " "
  fi

}

# create symlinks
create_route "docs"
create_static "docs"
create_route "site"
create_static "site"


# pnpm exec echo $APP
# pnpm exec echo $STATIC
# pnpm exec echo $ROUTES
# pnpm exec echo $NEW