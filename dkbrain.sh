for i in {1..100000}; do curl -s "https://www.dkbrains.com/course-list.aspx" & done
wait


wrk -t12 -c10000 -d30s https://www.dkbrains.com/course-list.aspx

BRana82#

https://www.dkbrains.com/course-details-show.aspx?crs=124&ch=615&cont=4507
https://www.dkbrains.com/course-details-show.aspx?crs=124&ch=615&cont=4510

https://www.dkbrains.com/course-details-show.aspx?crs=110&ch=571&cont=4220
https://www.dkbrains.com/course-details-show.aspx?crs=110&ch=572&cont=4221


https://www.youtube.com/embed/UK-Jr4f43FI?si=ZO6I7FSiT5lXW2LV