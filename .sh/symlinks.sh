# variables
##################################################################

# Main App
APP=./apps/+app
STATIC=./apps/+app/static
ROUTES=./apps/+app/src/routes

# New Apps
NEW=./apps


# symlink function
##################################################################
create_symlinks() {

  # create app route
  # ---------------------------------------------
  if test -d apps/+app/src/routes/$1; then
    # failure message
    pnpm exec echo " "
    pnpm exec echo " ❌ $1 symlink route exists"
    pnpm exec echo " "
  else
    # create route symlink
    cd apps/+app/src/routes
    ln -s ../../../$1/src/routes $1

    # Success message
    pnpm exec echo " "
    pnpm exec echo " ✅ $1 symlink route created"
    pnpm exec echo " "
  fi

  # create static folder
  # ---------------------------------------------
  if test -d apps/$1/static; then
    # failure message
    pnpm exec echo " "
    pnpm exec echo " ❌ $1 static folder exists"
    pnpm exec echo " "
  else
    # create static folder
    cd apps/$1
    ln -s ../+app/static static

    pnpm exec echo " "
    pnpm exec echo " ✅ $1 static folder created"
    pnpm exec echo " "
  fi

}

# create symlinks
create_symlinks "docs"
create_symlinks "site"