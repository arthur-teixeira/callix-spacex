import { Launch } from "../types/Launch";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type LaunchCardProps = {
    launch: Launch;
};

const LaunchCard = ({ launch }: LaunchCardProps) => {
    const handleExternalRedirect = (link: string) => {
        window.open(link, '_blank');
    };

    const handleYoutubeRedirect = () => {
        handleExternalRedirect(launch.links.webcast);
    };

    const handleArticleRedirect = () => {
        handleExternalRedirect(launch.links.article);
    };

    const patchSrc = launch.links.patch.large || launch.links.patch.small;

    return (
        <Card className="my-3 flex-row flex-wrap">
            {patchSrc && (
                <Card.Header className="border-0">
                    <Card.Img src={launch.links.patch.large} style={{ width: '8rem' }} />
                </Card.Header>
            )}
            <Card.Body className="px-2 w-75">
                <Card.Title>{launch.name}</Card.Title>
                <Card.Text className="text-justify text-wrap">{launch.details}</Card.Text>
            </Card.Body>
            <Card.Footer className="w-100">
                {launch.links.article && <Button variant="primary" className="mx-2" onClick={handleArticleRedirect}>Leia a matéria</Button>}
                <Button variant="danger" className="mx-2" onClick={handleYoutubeRedirect}>Assista no Youtube</Button>
            </Card.Footer>
        </Card>
    )
}

export default LaunchCard;
