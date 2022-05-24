import { useRouter } from 'next/router';
import { wigsDatabase } from '../../util/database';

export default function Wig(props) {
  // const router = useRouter();
  // const { wigId } = router.query;

  if (!props.wig) {
    return <div> Wig not found</div>;
  }

  return (
    <div>
      This will show all single wig profiles {props.wigId}
      <h1> {props.wig.name}</h1>
      <h1>Color: {props.wig.color}</h1>
      <h1>Price: {props.wig.price}</h1>
    </div>
  );
}

export function getServerSideProps(context) {
  const foundWig = wigsDatabase.find((wig) => {
    return wig.id === context.query.wigId;
  });

  if (!foundWig) {
    context.res.statusCode = 404;
  }

  return {
    props: {
      wig: foundWig || null,
    },
  };
}
