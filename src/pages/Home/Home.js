import videos from '~/assets/videos';
import Video from '~/components/Video';

function Home() {
    const user = {
        avatar: '//ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png',
        full_name: 'Manchester United',
        nickname: 'Manchester United',
        tick: true,
    };
    return (
        <div>
            <Video user={user} title='Rashford' music='Rashford' srcVideo={videos.rashford}/>
            <Video user={user} title='Garnacho' music='Garnacho' srcVideo={videos.garnacho}/>
            <Video user={user} title='Lissandro' music='Lissandro' srcVideo={videos.lissandro}/>

        </div>
    );
}

export default Home;
