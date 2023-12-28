package org.launchcode.bookmaster.events;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/event")
@CrossOrigin
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @PostMapping("/save")
    public Event saveEvent(@RequestBody Event newEvent){
        return eventRepository.save(newEvent);
    }

    @GetMapping("/all")
    public Iterable<Event> getEvent(){
        return eventRepository.findAll();
    }

    @GetMapping("/{eventId}")
    public Event getEvent(@PathVariable Integer eventId){
        return eventRepository.findById(eventId).orElseThrow();
    }

    @DeleteMapping("/{eventId}")
    public void deleteEvent(@PathVariable Integer eventId) {
        eventRepository.deleteById(eventId);
    }

    @PutMapping("/{eventId}")
    public Event updateEvent(@PathVariable Integer eventId, @RequestBody Event updatedEvent) {
        Event event = eventRepository.findById(eventId).orElseThrow();
        event.setName(updatedEvent.getName());
        event.setDetail(updatedEvent.getDetail());
        event.setDate(updatedEvent.getDate());


        return eventRepository.save(event);

    }
}
