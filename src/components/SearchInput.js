import React from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";

const SearchInput = () => {
    return (
        <Container>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Search Your Camera"
                    aria-describedby="basic-addon2"
                    className="p-2"
                />
                <Button variant="primary">Search</Button>
            </InputGroup>
        </Container>
    );
};

export default SearchInput;
