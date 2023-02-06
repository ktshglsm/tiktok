import videos from '~/assets/videos';
import Video from '~/components/Video';

function Home() {
    const user = {
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/322468930_721833059551171_8815409563668299918_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=p8RjQ8_1UrgAX9xitHi&_nc_ht=scontent.fhan2-4.fna&oh=00_AfAKj7lnp_2Lz_1ggpHOE6xP64KmTBzYR5pNrPKDFkH88g&oe=63E18919',
        full_name: 'Khúc Thị Hương',
        nickname: 'Khúc Thị Hương',
        tick: true,
    };
    return (
        <div>
            <Video user={user} title='hihi' music='Như anh đã thấy em' srcVideo={videos.bekhuc}/>
            <Video user={user} title='hihi' music='I wanted you' srcVideo={videos.iwantedyou}/>
            <Video user={user} title='hihi' music='Bị điên à!!!' srcVideo={videos.bidiena}/>

        </div>
    );
}

export default Home;
