#!/bin/bash

#############################################
#       HBWABot Mizo – Termux Installer     #
#     Full Auto Installer + PM2 + Backup    #
#       By HBMods-OFC (Herbert Suantak)     #
#############################################

# COLORS
GREEN='\033[1;32m'
CYAN='\033[1;36m'
YELLOW='\033[1;33m'
RED='\033[1;31m'
NC='\033[0m'

clear

# BOT DIRECTORY
BOT_DIR="$HOME/HBWABot-Mz"

#############################################
# Install Requirements
#############################################
install_req() {
clear
echo -e "${CYAN}Installing Requirements...${NC}"

pkg update -y
pkg upgrade -y
pkg install -y git nodejs wget ffmpeg imagemagick nano termux-api

npm install -g pm2

echo -e "${GREEN}All requirements installed!${NC}"
sleep 1
menu
}

#############################################
# Clone Bot
#############################################
install_bot() {
clear
echo -e "${CYAN}Downloading HBWABot...${NC}"

rm -rf "$BOT_DIR"
git clone https://github.com/HBMods-OFC/HBWABot-Mz.git

cd "$BOT_DIR"

echo -e "${YELLOW}Installing Node Modules...${NC}"
npm install

echo -e "${GREEN}Installation Complete!${NC}"
sleep 1
menu
}

#############################################
# Editing settings.js
#############################################
edit_settings() {
SETTINGS="$BOT_DIR/settings.js"

if [ ! -f "$SETTINGS" ]; then
    echo -e "${RED}settings.js not found!${NC}"
    sleep 1
    menu
fi

clear
echo -e "${CYAN}===== Edit Bot Settings =====${NC}"
echo -e "${YELLOW}Enter new owner number:${NC}"
read NEWNUM

echo -e "${YELLOW}Enter new owner name:${NC}"
read NEWNAME

echo -e "${YELLOW}Enter new bot name:${NC}"
read NEWBOT

sed -i "s/global.owner = \[[^]]*\]/global.owner = ['$NEWNUM']/" $SETTINGS
sed -i "s/global.ownernumber = '.*'/global.ownernumber = '$NEWNUM'/" $SETTINGS
sed -i "s/global.ownername = \".*\"/global.ownername = \"$NEWNAME\"/" $SETTINGS
sed -i "s/global.botname = \".*\"/global.botname = \"$NEWBOT\"/" $SETTINGS

echo -e "${GREEN}✔ Settings Updated!${NC}"
sleep 1
menu
}

#############################################
# Start Bot Normally
#############################################
start_bot() {
cd "$BOT_DIR"
node index.js
}

#############################################
# PM2 Manager
#############################################
pm2_manager() {
clear
echo -e "${CYAN}===== PM2 MANAGER =====${NC}"
echo -e "${YELLOW}1.${NC} Start Bot with PM2"
echo -e "${YELLOW}2.${NC} Stop Bot"
echo -e "${YELLOW}3.${NC} Restart Bot"
echo -e "${YELLOW}4.${NC} View Logs"
echo -e "${YELLOW}5.${NC} Delete PM2 Process"
echo -e "${YELLOW}6.${NC} Enable Auto-Start"
echo -e "${YELLOW}7.${NC} Disable Auto-Start"
echo -e "${YELLOW}0.${NC} Back"
read -p "Select: " p2

case $p2 in
1) cd "$BOT_DIR"; pm2 start index.js --name HBWA; pm2 save;;
2) pm2 stop HBWA;;
3) pm2 restart HBWA;;
4) pm2 logs HBWA;;
5) pm2 delete HBWA;;
6) pm2 startup; pm2 save;;
7) pm2 unstartup;;
0) menu;;
*) echo "Invalid";;
esac

sleep 1
pm2_manager
}

#############################################
# Backup System
#############################################
backup_bot() {
BACKUP_DIR="$HOME/storage/shared/HBWABot/backup"
mkdir -p "$BACKUP_DIR"

cp -r "$BOT_DIR" "$BACKUP_DIR/HBWABot-Backup-$(date +"%Y-%m-%d")"

echo -e "${GREEN}Backup Created!${NC}"
sleep 1
menu
}

#############################################
# Restore Bot
#############################################
restore_bot() {
clear
echo -e "${CYAN}Looking for backups...${NC}"

ls "$HOME/storage/shared/HBWABot/backup"
echo ""
echo -e "${YELLOW}Enter backup folder name:${NC}"
read folder

cp -r "$HOME/storage/shared/HBWABot/backup/$folder" "$BOT_DIR"

echo -e "${GREEN}Bot Restored!${NC}"
sleep 1
menu
}

#############################################
# FULL PROTECTION SYSTEM
#############################################
full_protection() {
clear
echo -e "${CYAN}Enabling FULL Protection...${NC}"

pm2 delete HBWA >/dev/null 2>&1

if [ ! -d "$BOT_DIR/node_modules" ]; then
    cd "$BOT_DIR"
    npm install
fi

if [ ! -d "$BOT_DIR/session" ]; then
    mkdir -p "$BOT_DIR/session"
fi

cd "$BOT_DIR"
pm2 start index.js --name HBWA
pm2 save
pm2 startup
pm2 save

BACKUP_DIR="$HOME/storage/shared/HBWABot/backup"
mkdir -p "$BACKUP_DIR"

cat <<EOF > $HOME/daily_backup.sh
#!/bin/bash
DATE=\$(date +"%Y-%m-%d")
cp -r "$BOT_DIR/session" "$BACKUP_DIR/session-\$DATE"
EOF

chmod +x $HOME/daily_backup.sh

termux-job-scheduler --cancel-all
termux-job-scheduler --job-id 1 --period-ms 86400000 --script $HOME/daily_backup.sh

# Update checker
cat <<EOF > $HOME/update_check.sh
#!/bin/bash
LOCAL=\$(cd "$BOT_DIR" && git rev-parse HEAD)
REMOTE=\$(git ls-remote https://github.com/HBMods-OFC/HBWABot-Mz.git HEAD | awk '{print \$1}')

if [ "\$LOCAL" != "\$REMOTE" ]; then
    termux-notification --title "HBWABot Update" --content "New update available!"
fi
EOF

chmod +x $HOME/update_check.sh
termux-job-scheduler --job-id 2 --period-ms 10800000 --script $HOME/update_check.sh

echo -e "${GREEN}✔ FULL PROTECTION ENABLED!${NC}"
sleep 1
menu
}

#############################################
# MAIN MENU
#############################################
menu() {
clear
echo -e "${CYAN}===== HBWABot Termux Manager =====${NC}"
echo -e "${YELLOW}1.${NC} Install Requirements"
echo -e "${YELLOW}2.${NC} Download Bot"
echo -e "${YELLOW}3.${NC} Start Bot"
echo -e "${YELLOW}4.${NC} PM2 Manager"
echo -e "${YELLOW}5.${NC} Edit Settings.js"
echo -e "${YELLOW}6.${NC} Backup Bot"
echo -e "${YELLOW}7.${NC} Restore Bot"
echo -e "${YELLOW}8.${NC} Full Protection Mode"
echo -e "${YELLOW}9.${NC} Exit"
read -p "Select: " opt

case $opt in
1) install_req ;;
2) install_bot ;;
3) start_bot ;;
4) pm2_manager ;;
5) edit_settings ;;
6) backup_bot ;;
7) restore_bot ;;
8) full_protection ;;
9) exit ;;
*) echo "Invalid"; sleep 1; menu ;;
esac
}

menu
