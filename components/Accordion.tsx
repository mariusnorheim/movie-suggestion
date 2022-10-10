import { ResponseData } from '@interfaces/responsedata'
import Link from 'next/link'

type ResponseProps = {
  response: ResponseData
}

export default function AccordionComponent({ response }: ResponseProps) {
  return (
    <>
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            {response.results.}
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.
            This is the first item's accordion body.
            <Link href="/person/[id]" as={`/person/${actor.id}`}>
              <a>{actor.name}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
