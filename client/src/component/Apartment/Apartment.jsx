import React from 'react';
import Card from '../../ui/Card/Card';
import './Apartment.css';
// import data from "../../data";
import Button from '@mui/material/Button';



// const data =
//     [{
//         "available": true,
//         "comments": 2,
//         "comments_full": null,
//         "factcheck": null,
//         "header": "Linoy Baranes\u200e\u05d3\u05d9\u05e8\u05d5\u05ea \u05dc\u05d4\u05e9\u05db\u05e8\u05d4 \u05e8\u05d9\u05e7\u05d5\u05ea \u05d0\u05d5 \u05e9\u05d5\u05ea\u05e4\u05d9\u05dd \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1",
//         "image": "https://m.facebook.com/photo/view_full_size/?fbid=10217483015585754&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&locale2=en_US&refid=13&__tn__=%2Cg",
//         "image_id": null,
//         "image_ids": [],
//         "image_lowquality": "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280077638_10217483014985739_4118007713608624883_n.jpg?stp=cp0_dst-jpg_e15_p160x160_q65&_nc_cat=101&ccb=1-6&_nc_sid=5bac3a&_nc_ohc=XrMrQ_61JyoAX-xRNR_&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_Ux_ujok8n9dubkPs1BjJLJ0Hh0DAkWOZfqjd7hufTxg&oe=628034B2",
//         "images": [
//             "https://m.facebook.com/photo/view_full_size/?fbid=10217483015585754&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&locale2=en_US&refid=13&__tn__=%2Cg",
//             "https://m.facebook.com/photo/view_full_size/?fbid=10217483015545753&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&locale2=en_US&refid=13&__tn__=%2Cg",
//             "https://m.facebook.com/photo/view_full_size/?fbid=10217483014265721&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&locale2=en_US&refid=13&__tn__=%2Cg",
//             "https://m.facebook.com/photo/view_full_size/?fbid=10217483017145793&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&locale2=en_US&refid=13&__tn__=%2Cg",
//             "https://m.facebook.com/photo/view_full_size/?fbid=10217483017865811&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&locale2=en_US&refid=13&__tn__=%2Cg",
//             "https://m.facebook.com/photo/view_full_size/?fbid=10217483022985939&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&locale2=en_US&refid=13&__tn__=%2Cg",
//             "https://m.facebook.com/photo/view_full_size/?fbid=10217483016225770&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&locale2=en_US&refid=13&__tn__=%2Cg",
//             "https://m.facebook.com/photo/view_full_size/?fbid=10217483015865761&ref_component=mbasic_photo_permalink&ref_page=%2Fwap%2Fphoto.php&locale2=en_US&refid=13&__tn__=%2Cg"
//         ],
//         "images_description": [
//             "May be an image of indoor",
//             "May be an image of living room",
//             "May be an image of indoor",
//             "May be an image of bedroom",
//             "May be an image of indoor",
//             "May be an image of living room",
//             "May be an image of indoor",
//             "May be an image of bedroom"
//         ],
//         "images_lowquality": [
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280077638_10217483014985739_4118007713608624883_n.jpg?stp=cp0_dst-jpg_e15_p160x160_q65&_nc_cat=101&ccb=1-6&_nc_sid=5bac3a&_nc_ohc=XrMrQ_61JyoAX-xRNR_&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_Ux_ujok8n9dubkPs1BjJLJ0Hh0DAkWOZfqjd7hufTxg&oe=628034B2",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280095394_10217483014905737_2588850058284098514_n.jpg?stp=cp0_dst-jpg_e15_p160x160_q65&_nc_cat=100&ccb=1-6&_nc_sid=5bac3a&_nc_ohc=CE64RZDXDa0AX9wIp5-&_nc_oc=AQmGWNruM4JrX0pIR_oSVgNw42T0TCGSkknSBR4I2xYOiUhndkwejWWYblIvYj6W0ZQ&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_nnnQrt1Gnd6dHJiYDqW2CYkl0RDAcMx6eZ5AHmnBlEA&oe=627FED2C",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280124142_10217483013865711_5063769791465218491_n.jpg?stp=cp0_dst-jpg_e15_p110x80_q65&_nc_cat=110&ccb=1-6&_nc_sid=5bac3a&_nc_ohc=ixGXE5vTnYkAX8kr7xk&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT99nX03ONm8Wu_2a5H6AC6EGfk8YeJ_weI_YXIAAXEqEw&oe=628045C3",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280099826_10217483016905787_5627666180253872704_n.jpg?stp=cp0_dst-jpg_e15_p110x80_q65&_nc_cat=106&ccb=1-6&_nc_sid=5bac3a&_nc_ohc=mZmKgW3q20IAX8cG-rX&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_tQkqswuo3Fuo9dgdb6y-8FLA203mhsTLXFt1EvsM3Ng&oe=62808651",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280118393_10217483017705807_4440814368928813532_n.jpg?stp=cp0_dst-jpg_e15_q65_s133x133&_nc_cat=100&ccb=1-6&_nc_sid=5bac3a&_nc_ohc=v1pEdWo74OMAX9s51Hr&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT-TI_3n5in7vIvJCxdwOBA0DeIVDWT2MG2PWYQq1kb_8A&oe=62808BD6"
//         ],
//         "images_lowquality_description": [
//             "May be an image of indoor",
//             "May be an image of living room",
//             "May be an image of indoor",
//             "May be an image of bedroom",
//             "May be an image of indoor"
//         ],
//         "is_live": false,
//         "likes": 0,
//         "link": null,
//         "links": [],
//         "original_text": null,
//         "page_id": "45245752193",
//         "post_id": "10158853085477194",
//         "post_text": "\u05e9\u05d9\u05de\u05d5 \u05dc\u05d1\u05d1 \u05de\u05e6\u05d9\u05d0\u05d4 \u05e9\u05dc \u05de\u05de\u05e9 !\n\u05de\u05ea\u05e4\u05e0\u05d4 \u05d3\u05d9\u05e8\u05ea 3 \u05d7\u05d3\u05e8\u05d9\u05dd \u05de\u05e9\u05d5\u05e4\u05e6\u05ea \u05d5\u05d9\u05e4\u05d4 \u05d1\u05e8\u05d7\u05d5\u05d1 \u05d0\u05d1\u05df \u05d2\u05d1\u05d9\u05e8\u05d5\u05dc \u05de\u05d8\u05e8 \u05de\u05db\u05d9\u05db\u05e8 \u05e8\u05d1\u05d9\u05df \u05d5\u05de\u05d2\u05d3\u05dc \u05d4\u05de\u05d0\u05d4 , \u05d4\u05d3\u05d9\u05e8\u05d4 \u05de\u05ea\u05d0\u05d9\u05de\u05d4 \u05de\u05d0\u05d5\u05d3 \u05dc2 \u05e9\u05d5\u05ea\u05e4\u05d9\u05dd \u05e1\u05dc\u05d5\u05df \u05de\u05e8\u05d5\u05d5\u05d7 \u05d5\u05d7\u05d3\u05e8\u05d9 \u05e9\u05d9\u05e0\u05d4 \u05d2\u05d3\u05d5\u05dc\u05d9\u05dd , \u05e1\u05d4\u05db \u05d2\u05d5\u05d3\u05dc \u05d4\u05d3\u05d9\u05e8\u05d4 \u05db95 \u05de\u05d8\u05e8 , \u05e7\u05d9\u05d9\u05dd \u05d2\u05dd \u05d2\u05d2 \u05e9\u05dc \u05db\u05dc \u05d4\u05d1\u05e0\u05d9\u05d9\u05df \u05d0\u05d1\u05dc \u05dc\u05d0 \u05db\u05d5\u05dc\u05dd \u05de\u05e9\u05ea\u05de\u05e9\u05d9\u05dd \u05d0\u05e4\u05e9\u05e8 \u05dc\u05e9\u05d1\u05ea \u05e9\u05dd \u05d7\u05d5\u05e4\u05e9\u05d9 ! \u05db\u05e0\u05d9\u05e1\u05d4 \u05dc\u05d3\u05d9\u05e8\u05d4 \u05d19/6 \u05de\u05d7\u05d9\u05e8 8000",
//         "post_url": "https://facebook.com/groups/ApartmentsTelAviv/posts/10158853085477194",
//         "reaction_count": null,
//         "reactions": null,
//         "reactors": null,
//         "shared_post_id": null,
//         "shared_post_url": null,
//         "shared_text": "",
//         "shared_time": null,
//         "shared_user_id": null,
//         "shared_username": null,
//         "sharers": null,
//         "shares": 0,
//         "text": "\u05e9\u05d9\u05de\u05d5 \u05dc\u05d1\u05d1 \u05de\u05e6\u05d9\u05d0\u05d4 \u05e9\u05dc \u05de\u05de\u05e9 !\n\u05de\u05ea\u05e4\u05e0\u05d4 \u05d3\u05d9\u05e8\u05ea 3 \u05d7\u05d3\u05e8\u05d9\u05dd \u05de\u05e9\u05d5\u05e4\u05e6\u05ea \u05d5\u05d9\u05e4\u05d4 \u05d1\u05e8\u05d7\u05d5\u05d1 \u05d0\u05d1\u05df \u05d2\u05d1\u05d9\u05e8\u05d5\u05dc \u05de\u05d8\u05e8 \u05de\u05db\u05d9\u05db\u05e8 \u05e8\u05d1\u05d9\u05df \u05d5\u05de\u05d2\u05d3\u05dc \u05d4\u05de\u05d0\u05d4 , \u05d4\u05d3\u05d9\u05e8\u05d4 \u05de\u05ea\u05d0\u05d9\u05de\u05d4 \u05de\u05d0\u05d5\u05d3 \u05dc2 \u05e9\u05d5\u05ea\u05e4\u05d9\u05dd \u05e1\u05dc\u05d5\u05df \u05de\u05e8\u05d5\u05d5\u05d7 \u05d5\u05d7\u05d3\u05e8\u05d9 \u05e9\u05d9\u05e0\u05d4 \u05d2\u05d3\u05d5\u05dc\u05d9\u05dd , \u05e1\u05d4\u05db \u05d2\u05d5\u05d3\u05dc \u05d4\u05d3\u05d9\u05e8\u05d4 \u05db95 \u05de\u05d8\u05e8 , \u05e7\u05d9\u05d9\u05dd \u05d2\u05dd \u05d2\u05d2 \u05e9\u05dc \u05db\u05dc \u05d4\u05d1\u05e0\u05d9\u05d9\u05df \u05d0\u05d1\u05dc \u05dc\u05d0 \u05db\u05d5\u05dc\u05dd \u05de\u05e9\u05ea\u05de\u05e9\u05d9\u05dd \u05d0\u05e4\u05e9\u05e8 \u05dc\u05e9\u05d1\u05ea \u05e9\u05dd \u05d7\u05d5\u05e4\u05e9\u05d9 ! \u05db\u05e0\u05d9\u05e1\u05d4 \u05dc\u05d3\u05d9\u05e8\u05d4 \u05d19/6 \u05de\u05d7\u05d9\u05e8 8000",
//         "time": "2022-05-10 11:31:46",
//         "timestamp": 1652171506,
//         "user_id": 1786975173,
//         "user_url": null,
//         "username": "Linoy Baranes",
//         "video": null,
//         "video_duration_seconds": null,
//         "video_height": null,
//         "video_id": null,
//         "video_ids": [],
//         "video_quality": null,
//         "video_size_MB": null,
//         "video_thumbnail": null,
//         "video_watches": null,
//         "video_width": null,
//         "videos": [],
//         "w3_fb_url": null,
//         "was_live": false,
//         "with": [
//             {
//                 "link": "https://m.facebook.com/groups/ApartmentsTelAviv/?locale2=en_US&refid=18&_ft_=qid.-6365223030985539360%3Amf_story_key.10158853085477194%3Atop_level_post_id.10158853085477194%3Atl_objid.10158853085477194%3Acontent_owner_id_new.1786975173%3Apage_id.45245752193%3Asrc.22%3Aphoto_attachments_list.%5B10217483015585754%2C10217483015545753%2C10217483014265721%2C10217483017145793%2C10217483017865811%5D%3Astory_location.6%3Astory_attachment_style.album%3Afilter.GroupStoriesByActivityEntQuery%3Aott.AX_M3kAMByJw725f%3Aent_attachement_type.PhotoSetAttachment%3Apage_insights.%7B%2245245752193%22%3A%7B%22page_id%22%3A45245752193%2C%22page_id_type%22%3A%22group%22%2C%22actor_id%22%3A1786975173%2C%22dm%22%3A%7B%22isShare%22%3A0%2C%22originalPostOwnerID%22%3A0%7D%2C%22psn%22%3A%22EntGroupMallPostCreationStory%22%2C%22post_context%22%3A%7B%22object_fbtype%22%3A657%2C%22publish_time%22%3A1652171506%2C%22story_name%22%3A%22EntGroupMallPostCreationStory%22%2C%22story_fbid%22%3A%5B10158853085477194%5D%7D%2C%22role%22%3A1%2C%22sl%22%3A6%7D%7D%3Aactrs.1786975173%3Atds_flgs.3%3Aftmd_400706.111111l&__tn__=C-R",
//                 "name": "\u05d3\u05d9\u05e8\u05d5\u05ea \u05dc\u05d4\u05e9\u05db\u05e8\u05d4 \u05e8\u05d9\u05e7\u05d5\u05ea \u05d0\u05d5 \u05e9\u05d5\u05ea\u05e4\u05d9\u05dd \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1"
//             }
//         ]
//     },
//     {
//         "available": true,
//         "comments": 0,
//         "comments_full": null,
//         "factcheck": null,
//         "header": "Shimrit Turgeman shared a post.",
//         "image": "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280111952_970252967026266_5121825418629376311_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=107&ccb=1-6&_nc_sid=110474&_nc_ohc=2prQPgCfKoMAX-mSQLP&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_twSr3Hyk0xxx9MSP5Bj5vI6_GIhzbf0PZifDfZDAtnw&oe=627EA2A7",
//         "image_id": null,
//         "image_ids": [],
//         "image_lowquality": "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280111952_970252967026266_5121825418629376311_n.jpg?stp=cp0_dst-jpg_e15_p240x240_q65&_nc_cat=107&ccb=1-6&_nc_sid=110474&_nc_ohc=2prQPgCfKoMAX-mSQLP&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT9XTgc_SZU61nOIf8gpeR7ldWD5VUgPkGfqP5m203InCQ&oe=627EA2A7",
//         "images": [
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280111952_970252967026266_5121825418629376311_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=107&ccb=1-6&_nc_sid=110474&_nc_ohc=2prQPgCfKoMAX-mSQLP&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_twSr3Hyk0xxx9MSP5Bj5vI6_GIhzbf0PZifDfZDAtnw&oe=627EA2A7",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280118283_970253063692923_6839623760587681304_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=110&ccb=1-6&_nc_sid=110474&_nc_ohc=vbTSly-VlowAX9htMT_&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT-hwtR2IW6_XC2dxUuC6rl2P-XGspoxIQvNPd_6uBe1ZQ&oe=627EF5CD",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280091039_970253103692919_4370944421735880274_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=109&ccb=1-6&_nc_sid=110474&_nc_ohc=nugMkm6x1ScAX9tXnQp&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT_9Bmzd7bBqtBraZUCdkdkZxhJRueuX5Jvy2V4ZA1Hdqw&oe=627F42BB",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280113086_970253143692915_2756210242894156111_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=110&ccb=1-6&_nc_sid=110474&_nc_ohc=fKaTP3xN5s8AX_0Bl1J&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT92tx4UlkgVA2RbvLyfARB3ybAA6mawP5ytA8oDjoyRFw&oe=627EFE42",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280118282_970253197026243_5917327136074115881_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=106&ccb=1-6&_nc_sid=110474&_nc_ohc=saoCTxe1gooAX9vBNGd&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT-yONaJeXXy3Up5D1ZoNPdRb2sMO1OZOuI_cVI6HWUW2w&oe=627FFBE0",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280073130_970253247026238_757092273142010862_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=110&ccb=1-6&_nc_sid=110474&_nc_ohc=3yJ7F4ww8aUAX9sgkIQ&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT-mJU1YTq-RGv32i8bRlidkovhfGM-Hpc5KTsfsg8w2Bw&oe=627F03EA",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280108246_970253297026233_2579998465429308568_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=109&ccb=1-6&_nc_sid=110474&_nc_ohc=yAM6lqGlIo8AX-gGCtU&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT-yNFSKBr_B07-jUPxxVdlrXYe76TuNE8S22eKXrrQaCQ&oe=627F7E3B",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280102585_970253350359561_4023416637065646512_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=104&ccb=1-6&_nc_sid=110474&_nc_ohc=3iOuyvtJtSUAX8rnlaG&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT-Yc-x6I_beF5pnmLCkVrVqOAqxGheFBCKGacgxcFUrPg&oe=627F3F1D",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280119794_970253397026223_3516003889917329768_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=101&ccb=1-6&_nc_sid=110474&_nc_ohc=EaMz-cbKw-0AX9rd39I&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT9c0YJnl-mIDC2As3AXSUuvQkhn6ZveLsaNzBnEqrzwVQ&oe=627F5DA6",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280114846_970253440359552_8899783103141305765_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=101&ccb=1-6&_nc_sid=110474&_nc_ohc=ZxmYLMhYPXkAX_aI00d&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT-PslAUbr7ut7_mepJS2y_u8InsPh1qQLf1Tsc0-1KUpQ&oe=627FAC48"
//         ],
//         "images_description": [
//             "May be an image of furniture and indoor",
//             "May be an image of indoor",
//             "May be an image of indoor",
//             "May be an image of furniture and indoor",
//             "May be an image of indoor",
//             "May be an image of indoor",
//             "May be an image of indoor",
//             "May be an image of living room",
//             "May be an image of furniture and living room",
//             "May be an image of furniture and indoor"
//         ],
//         "images_lowquality": [
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280111952_970252967026266_5121825418629376311_n.jpg?stp=cp0_dst-jpg_e15_p240x240_q65&_nc_cat=107&ccb=1-6&_nc_sid=110474&_nc_ohc=2prQPgCfKoMAX-mSQLP&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT9XTgc_SZU61nOIf8gpeR7ldWD5VUgPkGfqP5m203InCQ&oe=627EA2A7",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280118283_970253063692923_6839623760587681304_n.jpg?stp=cp0_dst-jpg_e15_p118x118_q65&_nc_cat=110&ccb=1-6&_nc_sid=110474&_nc_ohc=vbTSly-VlowAX9htMT_&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT-enzaeV3iR-2ajcTSPotnXSfjUIdQxn6i64Uz_wj390g&oe=627EF5CD",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280091039_970253103692919_4370944421735880274_n.jpg?stp=cp0_dst-jpg_e15_p110x80_q65&_nc_cat=109&ccb=1-6&_nc_sid=110474&_nc_ohc=nugMkm6x1ScAX9tXnQp&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT-CdLhzYPnIGC91zTJAGAFum1MoweCmkadvc9mz_IO0SQ&oe=627F42BB",
//             "https://scontent.fsdv1-2.fna.fbcdn.net/v/t39.30808-6/280113086_970253143692915_2756210242894156111_n.jpg?stp=cp0_dst-jpg_e15_p118x118_q65&_nc_cat=110&ccb=1-6&_nc_sid=110474&_nc_ohc=fKaTP3xN5s8AX_0Bl1J&_nc_ht=scontent.fsdv1-2.fna&oh=00_AT9NZEjjG6zjDCJX6kQDfdAo4XSFCi6wTM44ix7YqgD6Vw&oe=627EFE42"
//         ],
//         "images_lowquality_description": [
//             "May be an image of furniture and indoor",
//             "May be an image of indoor",
//             "May be an image of indoor",
//             "May be an image of furniture and indoor"
//         ],
//         "is_live": false,
//         "likes": 0,
//         "link": "https://wa.me/972506906490",
//         "links": [
//             {
//                 "link": "/story.php?story_fbid=pfbid0BGaM4hmJdY1qukMW9JjFWoe96hUXhJmEBxpkjqMVGTZb92RCEmAuFb8dmFJFK5sDl&id=196439011074336&locale2=en_US&refid=18",
//                 "text": "More"
//             },
//             {
//                 "link": "https://lm.facebook.com/l.php?u=https%3A%2F%2Fwa.me%2F972506906490&h=AT3_-vQrgfxO9Dq4xB8uFINe_aRRKYm2rfBnsdet7g-SxG9Z4NCstHR6snzQB0iPJ2xxrn0OENBUfLBBX9JWsiIe4g_iNcWIEnlhougUOryec-FVlDEKSP6qQq0OSCRgGfAGK8EoIV9MN2BoCsQk_-4slwBSq_jfhNdLLEZ4lbkNqsZkPoUt1BOAPbAXepl6FcWv8JhZ3Tv0FV72EQzOgLWafq59If172cKUarr11__H9cARqqHGPpc5wYq9FFtCXcV1Pl9Pvt_d6uQcjtmCX98y3G6AT9jBEiTC2Fr13BiAE-jpVHZOxvkL2penMJzPOFapfUWOxBNvjWckng4hvig6URZNcXJtbExTGgr85_LTNhHt8mBGpUGHtoDLeo6ck0kEoQ6g12ixNBlsxl0ewELdMHMSD6gpNORf9_NpWUyM0q9_OiLMtv6QzEGAIUUcvLJRB1CYKXEeguVMC8tvVW5G74sqgSHqoTm9O2oDfePICZGGbFrklAfWlMhgxl8mIyvwDEYehFHZ_THwUlrdDKwZNQ28mJ0uZuXaRlvFBzVLwxVZUW18b1-rfr46BJO47eY0za8MTVAUc-WXrX9OEpZ02iFXByYucuzyXVDNcOY-kuk6Lx57J6Kcb3NU93Nidwx_LzxjjTlwtYKZ08EBPGlibJ9BknPdzaoI7Cq73F6Sc5vWa_7_Lpgrd6e7uwutQWxo76v1J3o_0llubILz6rx8Iuzt2j0kebHH3txdW8LPtMav5-C3S61gXy99usToKC53EwNQUdMqQbuEio_qxF8-dzgaeGNYzKqiXWVtzA6UJ5RKi10p8rYs2hA7dMHRCMQDjBHSh-gn0dFN2TawI28EsVyDc05l3fdu_aa3lMqydJ1idGBaHQnqhyeow3fkQUOEOkRdwwuOx-Y91wgq4iMcnXlDpwPM8exRyflynw7l44nzdNOByrsTHxipqgn_WzvPEd30JkrQ0zLYI6sYJmG1_hnkpJlQ3iqd_9KhcvrbUCNP7-B1wRcxHBopxjgqF8ZF09pqIl2BXPJRyh4W-TRxcEZ5cEfcGkvAK4KJDCRA81qkRwGD6nszcLFvtKikrITJHlHn9ThCCjGyiCSnIHSvvGnyTYZ4a5V5nLvmjvhW2ZmzW-R5MuaIW_dQ3bIhFOBu6p9ayt4nNzOcF97uWBXWWvkxY64FeokNTQWS7DJ0y1y7uscUU1TqJm9ggYIiqrg5119IEoL253oiefedf0fMY12xOph2X4uXLH2bGZha3XEQrBR09JzwS-7yPyCZ0utwF7PtKwFblYogiI-yDSasSgjSXQZuwbjNf9tVKVqYwWXRy9iA7rDyUbpDp14szAZDgttckWvYXFkrpjZfkbvbCraBcEqC5jt-y0NdyPbtPq8AqmiWXspuenA8Y34jkR926l4FqgrLND1AeeP32SL8wfHqEUiX1v-TP7CerpWzPw4e2CfZMFIQkmz3E9UQAZq2ITq0Mt9MPchLfMo1tRITTYuJFiwrUySyhnS8LKx9lqIp1f7UpKtfEQ8uyenRaN5WX9Fsca3Xgtsey2KiYk2Jt1oXRN3WHb3SlMnSs9u575yWBgJDyDJeVCwUwVyRASN9J9QIdlKtQfFPvlIKvt9tON6UigOH-cpuVxnSHrQfwizKVUIbnaf9mkugSfak6nKZvoFJ5NJH4qRFI9o1dl6t8K1DZTJI0PfyATOyQSjrukxT2gah2cP8mr9E1pd7WkM0S0-SCTluXssAnEV9mipQcdAHizq6Q-Va1pFLWXhPrdZiBHybFvH2wtd9ge6Y3Dsbg8m0LtKvpEpB7iggk9yEFURyh5GwcBJMrxj03_GdhZiQz5fxfF6LShx5kqtA7fIdN6k35BpPHixy0-h9e4QW1w2Ial14eP7gurFV0tKqVM_DM9m9gZB4_pt2IbE7etU532dBeJPMP77JVBT7H2TksyDPv9IZ723WJhfM7rXmR1AsQFzDOymRA6cI4o_FGMte6kLUFYuftiQnwan8NMKfdEnAqXJDdr1DyaXyTvy-t75r8B9vY5pGIo7Riwuia0pmVoVmbhCTgZEDJNELK2Zf97F4VnuFZRtUKTJf7WrOpYZm9XlNSAsvojQZU5o59WormMMMNkXeRl6_2AHxfiY1o_6UHO8vL_WcM1g9C04nasN4KQ",
//                 "text": "https://wa.me/972506906490"
//             },
//             {
//                 "link": "https://m.facebook.com/groups/429827780505313/?locale2=en_US&refid=18&_ft_=qid.-6365223030843373901%3Amf_story_key.10158853471387194%3Atop_level_post_id.10158853471387194%3Atl_objid.10158853471387194%3Acontent_owner_id_new.1280141888%3Aoriginal_content_id.970252867026276%3Aoriginal_content_owner_id.196439011074336%3Apage_id.196439011074336%3Asrc.22%3Astory_location.6%3Aattached_story_attachment_style.album%3Afilter.GroupStoriesByActivityEntQuery%3Aott.AX9axB_UolPAP6zb%3Aattached_story_type.EntStatusCreationStory%3Aattached_story_attachment_type.PhotoSetAttachment%3Apage_insights.%7B%22196439011074336%22%3A%7B%22page_id%22%3A196439011074336%2C%22page_id_type%22%3A%22page%22%2C%22actor_id%22%3A1280141888%2C%22attached_story%22%3A%7B%22page_id%22%3A196439011074336%2C%22page_id_type%22%3A%22page%22%2C%22actor_id%22%3A196439011074336%2C%22dm%22%3A%7B%22isShare%22%3A0%2C%22originalPostOwnerID%22%3A0%7D%2C%22psn%22%3A%22EntStatusCreationStory%22%2C%22post_context%22%3A%7B%22object_fbtype%22%3A266%2C%22publish_time%22%3A1652173377%2C%22story_name%22%3A%22EntStatusCreationStory%22%2C%22story_fbid%22%3A%5B970252867026276%5D%7D%2C%22role%22%3A1%2C%22sl%22%3A6%7D%2C%22dm%22%3A%7B%22isShare%22%3A0%2C%22originalPostOwnerID%22%3A0%7D%2C%22psn%22%3A%22EntGroupMallPostCreationStory%22%2C%22role%22%3A1%2C%22sl%22%3A6%2C%22targets%22%3A%5B%7B%22actor_id%22%3A1280141888%2C%22page_id%22%3A196439011074336%2C%22post_id%22%3A970252867026276%2C%22role%22%3A1%2C%22share_id%22%3A0%7D%5D%7D%2C%2245245752193%22%3A%7B%22page_id%22%3A45245752193%2C%22page_id_type%22%3A%22group%22%2C%22actor_id%22%3A1280141888%2C%22dm%22%3A%7B%22isShare%22%3A1%2C%22originalPostOwnerID%22%3A970252867026276%7D%2C%22psn%22%3A%22EntGroupMallPostCreationStory%22%2C%22post_context%22%3A%7B%22object_fbtype%22%3A657%2C%22publish_time%22%3A1652183398%2C%22story_name%22%3A%22EntGroupMallPostCreationStory%22%2C%22story_fbid%22%3A%5B10158853471387194%5D%7D%2C%22role%22%3A1%2C%22sl%22%3A6%7D%7D%3Aactrs.1280141888%3Atds_flgs.3%3Aftmd_400706.111111l&__tn__=%2AsH-R",
//                 "text": "https://www.facebook.com/groups/429827780505313"
//             },
//             {
//                 "link": "https://m.facebook.com/groups/718718724880874/?locale2=en_US&refid=18&_ft_=qid.-6365223030843373901%3Amf_story_key.10158853471387194%3Atop_level_post_id.10158853471387194%3Atl_objid.10158853471387194%3Acontent_owner_id_new.1280141888%3Aoriginal_content_id.970252867026276%3Aoriginal_content_owner_id.196439011074336%3Apage_id.196439011074336%3Asrc.22%3Astory_location.6%3Aattached_story_attachment_style.album%3Afilter.GroupStoriesByActivityEntQuery%3Aott.AX9axB_UolPAP6zb%3Aattached_story_type.EntStatusCreationStory%3Aattached_story_attachment_type.PhotoSetAttachment%3Apage_insights.%7B%22196439011074336%22%3A%7B%22page_id%22%3A196439011074336%2C%22page_id_type%22%3A%22page%22%2C%22actor_id%22%3A1280141888%2C%22attached_story%22%3A%7B%22page_id%22%3A196439011074336%2C%22page_id_type%22%3A%22page%22%2C%22actor_id%22%3A196439011074336%2C%22dm%22%3A%7B%22isShare%22%3A0%2C%22originalPostOwnerID%22%3A0%7D%2C%22psn%22%3A%22EntStatusCreationStory%22%2C%22post_context%22%3A%7B%22object_fbtype%22%3A266%2C%22publish_time%22%3A1652173377%2C%22story_name%22%3A%22EntStatusCreationStory%22%2C%22story_fbid%22%3A%5B970252867026276%5D%7D%2C%22role%22%3A1%2C%22sl%22%3A6%7D%2C%22dm%22%3A%7B%22isShare%22%3A0%2C%22originalPostOwnerID%22%3A0%7D%2C%22psn%22%3A%22EntGroupMallPostCreationStory%22%2C%22role%22%3A1%2C%22sl%22%3A6%2C%22targets%22%3A%5B%7B%22actor_id%22%3A1280141888%2C%22page_id%22%3A196439011074336%2C%22post_id%22%3A970252867026276%2C%22role%22%3A1%2C%22share_id%22%3A0%7D%5D%7D%2C%2245245752193%22%3A%7B%22page_id%22%3A45245752193%2C%22page_id_type%22%3A%22group%22%2C%22actor_id%22%3A1280141888%2C%22dm%22%3A%7B%22isShare%22%3A1%2C%22originalPostOwnerID%22%3A970252867026276%7D%2C%22psn%22%3A%22EntGroupMallPostCreationStory%22%2C%22post_context%22%3A%7B%22object_fbtype%22%3A657%2C%22publish_time%22%3A1652183398%2C%22story_name%22%3A%22EntGroupMallPostCreationStory%22%2C%22story_fbid%22%3A%5B10158853471387194%5D%7D%2C%22role%22%3A1%2C%22sl%22%3A6%7D%7D%3Aactrs.1280141888%3Atds_flgs.3%3Aftmd_400706.111111l&__tn__=%2AsH-R",
//                 "text": "https://www.facebook.com/groups/718718724880874\u05da\u05de"
//             }
//         ],
//         "original_text": null,
//         "page_id": "196439011074336",
//         "post_id": "10158853471387194",
//         "post_text": "",
//         "post_url": "https://facebook.com/groups/ApartmentsTelAviv/posts/10158853471387194",
//         "reaction_count": null,
//         "reactions": null,
//         "reactors": null,
//         "shared_post_id": "970252867026276",
//         "shared_post_url": "https://facebook.com/story.php?story_fbid=pfbid0BGaM4hmJdY1qukMW9JjFWoe96hUXhJmEBxpkjqMVGTZb92RCEmAuFb8dmFJFK5sDl&id=196439011074336",
//         "shared_text": "\u200e\u05d3\u05d9\u05e8\u05d5\u05ea \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 \u05e8\u05d9\u05e7\u05d5\u05ea \u05d5\u05e9\u05d5\u05ea\u05e4\u05d9\u05dd \u05ea\u05d9\u05d5\u05d5\u05da \u05d4\u05e4\u05e8\u05dc\u05de\u05e0\u05d8\u200e\n8 hrs \u00b7\n\n\u05d1\u05e0\u05d5\u05d5\u05d4 \u05e6\u05d3\u05e7 \u05d4\u05de\u05d1\u05d5\u05e7\u05e9\u05ea\n\u05d3\u05d9\u05e8\u05d4 3 \u05d7\u05d3\u05e8\u05d9\u05dd \u05de\u05e9\u05d5\u05e4\u05e6\u05ea \u05d5\u05d9\u05e4\u05d4\n\u05de\u05dc\u05d0\u05ea \u05d0\u05d5\u05e8 \u05d5\u05d0\u05d5\u05d5\u05d9\u05e8 \u05d4\u05e8\u05d1\u05d4 \u05d7\u05dc\u05d5\u05e0\u05d5\u05ea\n\u05e9\u05e7\u05d8\u05d4\n\u05e7\u05d5\u05de\u05d4 2 \u05dc\u05dc\u05d0 \u05de\u05e2\u05dc\u05d9\u05ea.\n\u05db75 \u05de\u05d8\u05e8\n\u05de\u05d8\u05d1\u05d7 \u05e4\u05ea\u05d5\u05d7 \u05dc\u05e1\u05dc\u05d5\u05df \u05de\u05e8\u05d5\u05d5\u05d7\n\u05d7\u05d3\u05e8 \u05d0\u05de\u05d1\u05d8\u05d9\u05d4 \u05e2\u05dd \u05d7\u05d3\u05e8 \u05e8\u05d7\u05e6\u05d4\n2 \u05d7\u05d3\u05e8\u05d9 \u05e9\u05d9\u05e0\u05d4 \u05de\u05e8\u05d5\u05d5\u05d7\u05d9\u05dd\n\u05de\u05ea\u05d0\u05d9\u05de\u05d4 \u05dc\u05de\u05e9\u05e4\u05d7\u05d4 \u05d6\u05d5\u05d2\u05d5\u05ea \u05d52 \u05e9\u05d5\u05ea\u05e4\u05d9\u05dd\n( \u05de\u05d7\u05d9\u05e8 \u05d0\u05e8\u05e0\u05d5\u05e0\u05d4 \u05de\u05d9\u05dd \u05d5\u05d5\u05e2\u05d3 \u05d1\u05ea\u05d5\u05e1\u05e4\u05ea 500 \u05e9\"\u05d7 \u05d1\u05d7\u05d5\u05d3\u05e9) \u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05d4\u05d5\u05e6\u05d9\u05d0 \u05ea\u05df \u05d7\u05e0\u05d9\u05d4\n\u05d0\u05da \u05e0\u05d9\u05ea\u05df \u05dc\u05e9\u05db\u05d5\u05e8 \u05d7\u05e0\u05d9\u05d4 \u05d1\u05ea\u05d5\u05e1\u05e4\u05ea \u05ea\u05e9\u05dc\u05d5\u05dd \u05de\u05de\u05d5\u05dc\n\u05de\u05d7\u05d9\u05e8 -9500 \u05d5\u05ea\u05d9\u05d5\u05d5\u05da \u05de\u05d5\u05d3\u05e2\u05d4 \u05de\u05ea\u05d9\u05d5\u05d5\u05da\n\u05dc\u05e4\u05e8\u05d8\u05d9\u05dd \u05d5\u05ea\u05d9\u05d0\u05d5\u05dd \u05d1\u05d8\u05dc\u05e4\u05d5\u05df \u05d0\u05d5 \u05d1\u05d5\u05d5\u05d0\u05d8\u05e1\u05d0\u05e4 050-6906490\n\u05de\u05e6\u05d5\u05e8\u05e3 \u05dc\u05db\u05dd \u05e7\u05d9\u05e9\u05d5\u05e8 \u05dc\u05d5\u05d5\u05d0\u05d8\u05d0\u05e4\nhttps://wa.me/972506906490\n\n\u05de\u05de\u05dc\u05d9\u05e6\u05d4 \u05e2\u05dc 2 \u05e7\u05d1\u05d5\u05e6\u05d5\u05ea \u05de\u05e2\u05d5\u05dc\u05d5\u05ea \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 \u05d4\u05e6\u05d8\u05e8\u05e4\u05d5 \u05d5\u05e6\u05d9\u05e8\u05e4\u05d5\n\u05d3\u05d9\u05e8\u05d5\u05ea \u05e9\u05d5\u05d5\u05ea \u05dc\u05d6\u05d5\u05d2\u05d5\u05ea \u05d5\u05e9\u05d5\u05ea\u05e4\u05d9\u05dd \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1\nhttps://www.facebook.com/groups/429827780505313\n\u05d3\u05d9\u05e8\u05d5\u05ea \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 \u05e8\u05d9\u05e7\u05d5\u05ea \u05d5\u05e9\u05d5\u05ea\u05e4\u05d9\u05dd\nhttps://www.facebook.com/groups/718718724880874\u05da\u05de",
//         "shared_time": "2022-05-10 12:38:40",
//         "shared_user_id": "196439011074336",
//         "shared_username": "\u05d3\u05d9\u05e8\u05d5\u05ea \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 \u05e8\u05d9\u05e7\u05d5\u05ea \u05d5\u05e9\u05d5\u05ea\u05e4\u05d9\u05dd \u05ea\u05d9\u05d5\u05d5\u05da \u05d4\u05e4\u05e8\u05dc\u05de\u05e0\u05d8",
//         "sharers": null,
//         "shares": 0,
//         "text": "\u200e\u05d3\u05d9\u05e8\u05d5\u05ea \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 \u05e8\u05d9\u05e7\u05d5\u05ea \u05d5\u05e9\u05d5\u05ea\u05e4\u05d9\u05dd \u05ea\u05d9\u05d5\u05d5\u05da \u05d4\u05e4\u05e8\u05dc\u05de\u05e0\u05d8\u200e\n8 hrs \u00b7\n\n\u05d1\u05e0\u05d5\u05d5\u05d4 \u05e6\u05d3\u05e7 \u05d4\u05de\u05d1\u05d5\u05e7\u05e9\u05ea\n\u05d3\u05d9\u05e8\u05d4 3 \u05d7\u05d3\u05e8\u05d9\u05dd \u05de\u05e9\u05d5\u05e4\u05e6\u05ea \u05d5\u05d9\u05e4\u05d4\n\u05de\u05dc\u05d0\u05ea \u05d0\u05d5\u05e8 \u05d5\u05d0\u05d5\u05d5\u05d9\u05e8 \u05d4\u05e8\u05d1\u05d4 \u05d7\u05dc\u05d5\u05e0\u05d5\u05ea\n\u05e9\u05e7\u05d8\u05d4\n\u05e7\u05d5\u05de\u05d4 2 \u05dc\u05dc\u05d0 \u05de\u05e2\u05dc\u05d9\u05ea.\n\u05db75 \u05de\u05d8\u05e8\n\u05de\u05d8\u05d1\u05d7 \u05e4\u05ea\u05d5\u05d7 \u05dc\u05e1\u05dc\u05d5\u05df \u05de\u05e8\u05d5\u05d5\u05d7\n\u05d7\u05d3\u05e8 \u05d0\u05de\u05d1\u05d8\u05d9\u05d4 \u05e2\u05dd \u05d7\u05d3\u05e8 \u05e8\u05d7\u05e6\u05d4\n2 \u05d7\u05d3\u05e8\u05d9 \u05e9\u05d9\u05e0\u05d4 \u05de\u05e8\u05d5\u05d5\u05d7\u05d9\u05dd\n\u05de\u05ea\u05d0\u05d9\u05de\u05d4 \u05dc\u05de\u05e9\u05e4\u05d7\u05d4 \u05d6\u05d5\u05d2\u05d5\u05ea \u05d52 \u05e9\u05d5\u05ea\u05e4\u05d9\u05dd\n( \u05de\u05d7\u05d9\u05e8 \u05d0\u05e8\u05e0\u05d5\u05e0\u05d4 \u05de\u05d9\u05dd \u05d5\u05d5\u05e2\u05d3 \u05d1\u05ea\u05d5\u05e1\u05e4\u05ea 500 \u05e9\"\u05d7 \u05d1\u05d7\u05d5\u05d3\u05e9) \u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05d4\u05d5\u05e6\u05d9\u05d0 \u05ea\u05df \u05d7\u05e0\u05d9\u05d4\n\u05d0\u05da \u05e0\u05d9\u05ea\u05df \u05dc\u05e9\u05db\u05d5\u05e8 \u05d7\u05e0\u05d9\u05d4 \u05d1\u05ea\u05d5\u05e1\u05e4\u05ea \u05ea\u05e9\u05dc\u05d5\u05dd \u05de\u05de\u05d5\u05dc\n\u05de\u05d7\u05d9\u05e8 -9500 \u05d5\u05ea\u05d9\u05d5\u05d5\u05da \u05de\u05d5\u05d3\u05e2\u05d4 \u05de\u05ea\u05d9\u05d5\u05d5\u05da\n\u05dc\u05e4\u05e8\u05d8\u05d9\u05dd \u05d5\u05ea\u05d9\u05d0\u05d5\u05dd \u05d1\u05d8\u05dc\u05e4\u05d5\u05df \u05d0\u05d5 \u05d1\u05d5\u05d5\u05d0\u05d8\u05e1\u05d0\u05e4 050-6906490\n\u05de\u05e6\u05d5\u05e8\u05e3 \u05dc\u05db\u05dd \u05e7\u05d9\u05e9\u05d5\u05e8 \u05dc\u05d5\u05d5\u05d0\u05d8\u05d0\u05e4\nhttps://wa.me/972506906490\n\n\u05de\u05de\u05dc\u05d9\u05e6\u05d4 \u05e2\u05dc 2 \u05e7\u05d1\u05d5\u05e6\u05d5\u05ea \u05de\u05e2\u05d5\u05dc\u05d5\u05ea \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 \u05d4\u05e6\u05d8\u05e8\u05e4\u05d5 \u05d5\u05e6\u05d9\u05e8\u05e4\u05d5\n\u05d3\u05d9\u05e8\u05d5\u05ea \u05e9\u05d5\u05d5\u05ea \u05dc\u05d6\u05d5\u05d2\u05d5\u05ea \u05d5\u05e9\u05d5\u05ea\u05e4\u05d9\u05dd \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1\nhttps://www.facebook.com/groups/429827780505313\n\u05d3\u05d9\u05e8\u05d5\u05ea \u05d1\u05ea\u05dc \u05d0\u05d1\u05d9\u05d1 \u05e8\u05d9\u05e7\u05d5\u05ea \u05d5\u05e9\u05d5\u05ea\u05e4\u05d9\u05dd\nhttps://www.facebook.com/groups/718718724880874\u05da\u05de",
//         "time": "2022-05-10 14:49:58",
//         "timestamp": 1652183398,
//         "user_id": 1280141888,
//         "user_url": "https://facebook.com/shimrit.turgeman.1?groupid=45245752193&locale2=en_US&refid=18&_ft_=qid.-6365223030843373901%3Amf_story_key.10158853471387194%3Atop_level_post_id.10158853471387194%3Atl_objid.10158853471387194%3Acontent_owner_id_new.1280141888%3Aoriginal_content_id.970252867026276%3Aoriginal_content_owner_id.196439011074336%3Apage_id.196439011074336%3Asrc.22%3Astory_location.6%3Aattached_story_attachment_style.album%3Afilter.GroupStoriesByActivityEntQuery%3Aott.AX9axB_UolPAP6zb%3Aattached_story_type.EntStatusCreationStory%3Aattached_story_attachment_type.PhotoSetAttachment%3Apage_insights.%7B%22196439011074336%22%3A%7B%22page_id%22%3A196439011074336%2C%22page_id_type%22%3A%22page%22%2C%22actor_id%22%3A1280141888%2C%22attached_story%22%3A%7B%22page_id%22%3A196439011074336%2C%22page_id_type%22%3A%22page%22%2C%22actor_id%22%3A196439011074336%2C%22dm%22%3A%7B%22isShare%22%3A0%2C%22originalPostOwnerID%22%3A0%7D%2C%22psn%22%3A%22EntStatusCreationStory%22%2C%22post_context%22%3A%7B%22object_fbtype%22%3A266%2C%22publish_time%22%3A1652173377%2C%22story_name%22%3A%22EntStatusCreationStory%22%2C%22story_fbid%22%3A%5B970252867026276%5D%7D%2C%22role%22%3A1%2C%22sl%22%3A6%7D%2C%22dm%22%3A%7B%22isShare%22%3A0%2C%22originalPostOwnerID%22%3A0%7D%2C%22psn%22%3A%22EntGroupMallPostCreationStory%22%2C%22role%22%3A1%2C%22sl%22%3A6%2C%22targets%22%3A%5B%7B%22actor_id%22%3A1280141888%2C%22page_id%22%3A196439011074336%2C%22post_id%22%3A970252867026276%2C%22role%22%3A1%2C%22share_id%22%3A0%7D%5D%7D%2C%2245245752193%22%3A%7B%22page_id%22%3A45245752193%2C%22page_id_type%22%3A%22group%22%2C%22actor_id%22%3A1280141888%2C%22dm%22%3A%7B%22isShare%22%3A1%2C%22originalPostOwnerID%22%3A970252867026276%7D%2C%22psn%22%3A%22EntGroupMallPostCreationStory%22%2C%22post_context%22%3A%7B%22object_fbtype%22%3A657%2C%22publish_time%22%3A1652183398%2C%22story_name%22%3A%22EntGroupMallPostCreationStory%22%2C%22story_fbid%22%3A%5B10158853471387194%5D%7D%2C%22role%22%3A1%2C%22sl%22%3A6%7D%7D%3Aactrs.1280141888%3Atds_flgs.3%3Aftmd_400706.111111l&__tn__=C-R",
//         "username": "Shimrit Turgeman",
//         "video": null,
//         "video_duration_seconds": null,
//         "video_height": null,
//         "video_id": null,
//         "video_quality": null,
//         "video_size_MB": null,
//         "video_thumbnail": null,
//         "video_watches": null,
//         "video_width": null,
//         "w3_fb_url": null,
//         "was_live": false,
//         "with": [
//             {
//                 "link": "/story.php?story_fbid=pfbid0BGaM4hmJdY1qukMW9JjFWoe96hUXhJmEBxpkjqMVGTZb92RCEmAuFb8dmFJFK5sDl&id=196439011074336&locale2=en_US&refid=18&_ft_=qid.-6365223030843373901%3Amf_story_key.10158853471387194%3Atop_level_post_id.10158853471387194%3Atl_objid.10158853471387194%3Acontent_owner_id_new.1280141888%3Aoriginal_content_id.970252867026276%3Aoriginal_content_owner_id.196439011074336%3Apage_id.196439011074336%3Asrc.22%3Astory_location.6%3Aattached_story_attachment_style.album%3Afilter.GroupStoriesByActivityEntQuery%3Aott.AX9axB_UolPAP6zb%3Aattached_story_type.EntStatusCreationStory%3Aattached_story_attachment_type.PhotoSetAttachment%3Apage_insights.%7B%22196439011074336%22%3A%7B%22page_id%22%3A196439011074336%2C%22page_id_type%22%3A%22page%22%2C%22actor_id%22%3A1280141888%2C%22attached_story%22%3A%7B%22page_id%22%3A196439011074336%2C%22page_id_type%22%3A%22page%22%2C%22actor_id%22%3A196439011074336%2C%22dm%22%3A%7B%22isShare%22%3A0%2C%22originalPostOwnerID%22%3A0%7D%2C%22psn%22%3A%22EntStatusCreationStory%22%2C%22post_context%22%3A%7B%22object_fbtype%22%3A266%2C%22publish_time%22%3A1652173377%2C%22story_name%22%3A%22EntStatusCreationStory%22%2C%22story_fbid%22%3A%5B970252867026276%5D%7D%2C%22role%22%3A1%2C%22sl%22%3A6%7D%2C%22dm%22%3A%7B%22isShare%22%3A0%2C%22originalPostOwnerID%22%3A0%7D%2C%22psn%22%3A%22EntGroupMallPostCreationStory%22%2C%22role%22%3A1%2C%22sl%22%3A6%2C%22targets%22%3A%5B%7B%22actor_id%22%3A1280141888%2C%22page_id%22%3A196439011074336%2C%22post_id%22%3A970252867026276%2C%22role%22%3A1%2C%22share_id%22%3A0%7D%5D%7D%2C%2245245752193%22%3A%7B%22page_id%22%3A45245752193%2C%22page_id_type%22%3A%22group%22%2C%22actor_id%22%3A1280141888%2C%22dm%22%3A%7B%22isShare%22%3A1%2C%22originalPostOwnerID%22%3A970252867026276%7D%2C%22psn%22%3A%22EntGroupMallPostCreationStory%22%2C%22post_context%22%3A%7B%22object_fbtype%22%3A657%2C%22publish_time%22%3A1652183398%2C%22story_name%22%3A%22EntGroupMallPostCreationStory%22%2C%22story_fbid%22%3A%5B10158853471387194%5D%7D%2C%22role%22%3A1%2C%22sl%22%3A6%7D%7D%3Aactrs.1280141888%3Atds_flgs.3%3Aftmd_400706.111111l&__tn__=C-R",
//                 "name": "post"
//             }
//         ]
//     }
//     ]

const Apartment = (props) => {

    const openAptInfo = () => {
        props.onOpen(props.key, props.username, props.text, props.image, props.postUrl)
    }

    return (
        <Card>
            <img src={props.image} width="100%" height="170px" alt="home" />
            <h3 className="title">{props.username}</h3>
            <p className="content" dir='rtl'>{`${props.text.substring(0, 250)}...`}</p>
            <Button className="margin30" variant="contained" onClick={openAptInfo}>מידע נוסף</Button>

        </Card>
    );
}

export default Apartment;